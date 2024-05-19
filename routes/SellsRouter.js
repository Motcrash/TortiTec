import express from "express";
import { createSell, deleteSell, getAllSells, getSell, updateSell } from "../controllers/SellsController.js";


const sellsRouter = express.Router();

// Rutas para acceder a las ventas
sellsRouter.get('/', getAllSells);
sellsRouter.get('/:id', getSell);

// Rutas para crear una venta
sellsRouter.post('/', createSell);

// Rutas para actualizar una venta
sellsRouter.put('/:id', updateSell);

// Rutas para eliminar una venta
sellsRouter.delete('/:id', deleteSell);

export default sellsRouter;