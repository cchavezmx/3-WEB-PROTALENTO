import express from 'express';
import cors from 'cors';
import router from '../routes/index.js';
import { cloudinaryConfig } from '../database/cloudinayConfig.js';

const api = express();
const PORT = process.env.PORT || 4000;

api.use(cors())
// que url no solicito el servicio => /
// VALIDAR WHITELIST SOLO LOS DOMINIOS AUTORIZADOS PARA CONECTARSE
// PARSER EXPRESS
api.use(express.urlencoded({ extended: true }))
api.use(express.json({ extended: true }))
api.use('*', cloudinaryConfig)

// INICIALIZAR MIS RUTAS
api.get('/', (req, res) => res.send('Hola mundo'))
api.use('/api/v1', router)

export {
  api,
  PORT
}