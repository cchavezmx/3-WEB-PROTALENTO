import express from 'express'
import multer from 'multer'
import { ref, uploadBytes, getDownloadURL, getMetadata } from 'firebase/storage'
import { storage } from '../database/firebase.js'
import { v4 as uuidv4 } from 'uuid';
import File from '../models/Files.js'

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

// add a note
router.post('/upload', upload.single('formdata'), async (req, res) => {

  console.log(req.file, req.body)  
  const { mimetype, buffer } = req.file
  const storageRef = ref(storage, 'images/' + `${uuidv4()}.${mimetype?.split('/')[1]}`)

  return uploadBytes(storageRef, buffer)
    .then(async (snapshot) => {
      console.log("🚀 ~ file: index.js:22 ~ .then ~ snapshot:", snapshot)
      console.log("🚀 ~ file: index.js:22 ~ .then ~ snapshot:", snapshot.size)
      console.log('Uploaded a blob or file!');
      const metadata = await getMetadata(storageRef)
      const url = await getDownloadURL(storageRef)
      
      const file = new File({ url, size: metadata.size })
      await file.save()
      .then(async () => {        
        return res.json({ message: 'File saved successfully', url, metadata })
      })                
      
    })
})

const multerStore = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')    
  },
  filename: (req, file, cb) => {
    cb(null, `${uuidv4()}.${file.mimetype?.split('/')[1]}`)
  }
})
  const uploadLocal = multer({ storage: multerStore })
  router.post('/upload-local', uploadLocal.single('formdata'), async (req, res) => {
    return res.json({ message: 'File saved successfully', url: req.file.path })
    
})


router.get('/images', async (req, res) => {
  return File.find()
    .then((files) => {
      console.log('Files found successfully')
      return res.json({ files })
    })
})

router.get('/metadada', async (req, res) => {
})

export default router