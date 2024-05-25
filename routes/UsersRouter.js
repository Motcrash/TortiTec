import express from 'express';
import { getUser } from '../controllers/UsersController.js';

const userRouter = express.Router();

// Rutas para acceder a las ventas
userRouter.get('/:user', getUser);

export default userRouter;