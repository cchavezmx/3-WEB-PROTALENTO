import express from 'express'
import multer from 'multer'
import Datauri from 'datauri/parser.js';
import path from 'path';
import { uploader } from '../database/cloudinayConfig.js'
import cloudinary from 'cloudinary'
import File from '../models/Files.js';

const router = express.Router()

// add a note
const upload = multer({ storage: multer.memoryStorage() })
router.post('/upload', upload.single('formdata'), async (req, res) => {
    console.log(req.file)
    const validTypes = ['image/png', 'image/jpg', 'image/jpeg']
    if (!validTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ message: 'Invalid file type' })
    }

    const dUri = new Datauri()
    // buffer to base64
    const file =  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer)
    
    try {
      return uploader.upload(file.content)
      .then(async (result) => {
        console.log('Uploaded a blob or file!');
        console.log(result)
        const file = new File({ url: result.url, metadata: result })
        await file.save()
        .then(async () => {
          console.log('File saved successfully')          
          return res.json({ message: 'File saved successfully', url: result.url, metadata: result })
        })
        .catch((err) => {
          console.log(err)
          return res.status(500).json({ message: 'Error uploading file' })
        })
      })
      .catch((err) => {
        console.log(err)
        return res.status(500).json({ message: 'Error uploading file' })        
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Error uploading file' })
    }
  
})

router.get('/images', async (req, res) => {
  // return File.find()
  //   .then((files) => {
  //     console.log('Files found successfully')
  //     return res.json({ files })
  //   })
  cloudinary.v2.api.resources()
  .then((result) => {
    console.log(result)
    return res.json({ result })
  })
  
})

router.get('/metadata', async (req, res) => {
  cloudinary.v2.api.usage()
  .then((result) => {
    console.log(result)
    return res.json({ result })
  })
})


const localStore = multer({ dest: 'uploads/' })
router.post('/local-upload', localStore.single('formdata'), async (req, res) => {
  console.log(req.file)
  return res.json({ message: 'File saved successfully', url: req.file.path })
})


export default router


