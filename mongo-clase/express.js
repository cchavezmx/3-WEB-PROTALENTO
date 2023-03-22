const mongoose = require('mongoose');

const url = ""

mongoose.connect(url)


// El esquema le dice a Mongoose cómo se almacenarán los objetos de nota en la base de datos.
const notaSchema = new mongoose.Schema({
  titulo: String,
  contenido: String,
  fecha: Date,
})

const Note = mongoose.model('Note', notaSchema)

const note = new Note({
  titulo: 'Prueba',
  contenido: 'Prueba de contenido',
  fecha: new Date(),
})

// note.save().then(result => {
//   console.log('Nota guardada!')
//   mongoose.connection.close()
// })


// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })