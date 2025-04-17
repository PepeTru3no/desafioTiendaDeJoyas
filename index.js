import express from 'express';
import {config} from "dotenv";
import cors from 'cors';
import routerInventario from './routes/inventario.routes.js'

config();
const app=express();
app.use(cors());
app.use(express.json());
app.listen(3000, console.log('servidor levantado en el puerto 3000'));
app.use('/joyas',routerInventario);