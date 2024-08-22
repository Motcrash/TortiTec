import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/ProductsController.js';

const productsRouter = express.Router();

// Rutas para acceder a las ventas
productsRouter.get('/:user_id', getAllProducts);
productsRouter.get('/:user_id/:id', getProduct);

// Rutas para crear una venta
productsRouter.post('/', createProduct);

// Rutas para actualizar una venta
productsRouter.put('/:id', updateProduct);

// Rutas para eliminar una venta
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;