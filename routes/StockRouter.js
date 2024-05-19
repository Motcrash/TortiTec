import express from 'express';
import { createStock, deleteStock, getAllStock, getStock, updateStock } from '../controllers/StockController.js'

const stockRouter = express.Router();

stockRouter.get('/', getAllStock);
stockRouter.get('/:id', getStock);

stockRouter.post('/', createStock);

stockRouter.put('/:id', updateStock);

stockRouter.delete('/:id', deleteStock);

export default stockRouter;