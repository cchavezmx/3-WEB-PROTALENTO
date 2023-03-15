const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// para enviar datos por body necesitamos un middleware
// lista de host permitidos
// crear rutas privadas / publicas
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

const clientPoll = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
})

// CRUD DE MASCOTAS
// traer todas las mascotas
const pathEndpoint = '/api/v1'

app.get(`${pathEndpoint}/mascotas`, (req, res) => {
  try {
    clientPoll.connect() //  conectando a la base de datos
    clientPoll.query('SELECT * FROM Mascota WHERE status = true;')
      .then(result => {
        console.log(result)
        return res.send({ message: result.rows })
      })
      .catch(error => {
        console.log(error)
        throw new Error('Error client query pool')
      })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message })
  }
})

// C
app.post(`${pathEndpoint}/mascotas`, async (req, res) => {
  // hablitar el body de express
  const { nombre, tipo, raza, edad } = req.body
  const query = `
    insert into Mascota(nombre, tipo, raza, edad)
    values ('${nombre}', '${tipo}', '${raza}', ${edad});
  `
  try {
    clientPoll.connect()
    const response = await clientPoll.query(query)
    if (response.rowCount === 1) {
      return res.status(200).json({ message: 'Se añadio correctamente' })
    }

    return res.status(400).json({ message: 'No se realizaron cambios revisa tu petición' })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message })
  }
})

// ACTUALIZAR
app.patch(`${pathEndpoint}/mascota/:id`, async (req, res) => {
  // meter validacion de campos
  const { id } = req.params
  const { nombre, tipo, raza, edad } = req.body

  if (nombre === undefined) {
    return res.status(500).json({ message: 'Falto el campo de nombre' })
  }

  const queryBusqueda = `
   SELECT * FROM mascota WHERE id = ${id}
  `
  const query = `
    update mascota 
    set nombre = '${nombre}', tipo = '${tipo}', edad = '${edad}', raza = '${raza}'
    where id = ${id}
  `
  try {
    clientPoll.connect()
    // saber si el id exite dentro de la base de datos
    const idExist = await clientPoll.query(queryBusqueda)
      .then(resDB => resDB.rows)

    // idExit = [] o [...datos]
    if (idExist.length === 0) {
      return res.status(404).json({ message: `No hay registros con el id ${id}` })
    }

    const response = await clientPoll.query(query)
    if (response.rowCount === 1) {
      return res.status(200).json({ message: 'Se actualzo correctamente' })
    }

    return res.status(400).json({ message: 'No se realizaron cambios revisa tu petición' })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message })
  }
})

// borrado fisico ***PELIGROSO***
app.delete(`${pathEndpoint}/mascota/:id`, async (req, res) => {
  const { id } = req.params
  const queryBusqueda = `
  SELECT * FROM mascota WHERE id = ${id}
 `
  // TODO  ON DELETE CASCADE
  const queryDelteRegistros = `
    DELETE from registros where id_mascota = ${id}
  `

  const queryDelete = `
      DELETE from mascota 
      WHERE id = ${id}
    `
  try {
    clientPoll.connect()
    // saber si el id exite dentro de la base de datos
    const idExist = await clientPoll.query(queryBusqueda)
      .then(resDB => resDB.rows)

    // idExit = [] o [...datos]
    if (idExist.length === 0) {
      return res.status(404).json({ message: `No hay registros con el id ${id}` })
    }
    // borrar el id de la tabla registros
    await clientPoll.query(queryDelteRegistros)
    // TODO VALIDAR SI BORRO REGISTROS rowCount

    //  borar a las mascota
    const response = await clientPoll.query(queryDelete)
    if (response.rowCount === 1) {
      return res.status(200).json({ message: 'Se actualzo correctamente' })
    }

    return res.status(400).json({ message: 'No se realizaron cambios revisa tu petición' })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

// borrado logico politicas de la empresa
app.put(`${pathEndpoint}/mascota/:id`, async (req, res) => {
  // meter validacion de campos
  const { id } = req.params
  const { status } = req.body

  const queryBusqueda = `
   SELECT * FROM mascota WHERE id = ${id}
  `
  const query = `
    update mascota 
    set status = ${status}
    where id = ${id}
  `
  try {
    clientPoll.connect()
    // saber si el id exite dentro de la base de datos
    const idExist = await clientPoll.query(queryBusqueda)
      .then(resDB => resDB.rows)

    // idExit = [] o [...datos]
    if (idExist.length === 0) {
      return res.status(404).json({ message: `No hay registros con el id ${id}` })
    }

    const response = await clientPoll.query(query)

    if (response.rowCount === 1) {
      return res.status(200).json({ message: 'Se actualzo correctamente' })
    }

    return res.status(400).json({ message: 'No se realizaron cambios revisa tu petición' })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message })
  }
})

// TODOS crear metodos para veterinarios, metodos para registros

app.listen(PORT, () => {
  console.log(`Saludos desde el puerto ${PORT}`)
})
