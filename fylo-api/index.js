
import dotenv from 'dotenv'
import { PORT, api } from './api/index.js'
import './database/index.js'

dotenv.config()


api.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})