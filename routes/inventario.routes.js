import { Router } from "express"; 
import { filterInventarioController, findJewelByIdController, getInventarioController } from "../controller/inventario.controller.js";
import {filterInventarioMiddleware, findJewelByIdMiddleware, getInventarioMiddleware} from '../middlewares/inventario.middlewares.js';

const router = Router();

router.get("/", getInventarioMiddleware, getInventarioController);
router.get('/filtros',filterInventarioMiddleware, filterInventarioController);
router.get('/joya/:id', findJewelByIdMiddleware, findJewelByIdController);

export default router;