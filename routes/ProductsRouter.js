import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/ProductsController.js'

const productsRouter = express.Router();

// Rutas para acceder a las ventas
productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getProduct);

// Rutas para crear una venta
productsRouter.post('/', createProduct);

// Rutas para actualizar una venta
productsRouter.put('/:id', updateProduct);

// Rutas para eliminar una venta
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;