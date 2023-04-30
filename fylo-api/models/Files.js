import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  metadata: {
    type: Object
  }

})


const File = mongoose.model('File', FileSchema)

export default File