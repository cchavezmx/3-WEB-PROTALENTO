const user = {
  nombre: "Juan Pérez",
  email: "juan@email.com",
  cuenta: 2,
  password: "1234",
  saldo: 1000,
  log: [
    {
      fecha: new Date(),
      monto: 100,
      type: "deposito"
    }
  ]
}

// lo transformo en un string
const sringObjeto = JSON.stringify(user)


// lo transformo en un string en objeto
JSON.parse(sringObjeto)