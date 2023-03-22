const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;

const url = ``;

// MIDDLEWARES
// app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

// conexión con mongoose
mongoose.connect(url)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log(`Error en la conexion de la base de datos ${err}`))


// El esquema le dice a Mongoose cómo se almacenarán los objetos de nota en la base de datos.
const notaSchema = new mongoose.Schema({
  titulo: String,
  contenido: String,
  fecha: Date,
})

const Note = mongoose.model('Note', notaSchema)


// add a note
app.post('/notes', (req, res) => {
    const note = new Note({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        fecha: new Date()
    })

  note.save()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

app.listen(PORT, () => console.log('Express conectado y escuchando en el puerto: ', PORT ))