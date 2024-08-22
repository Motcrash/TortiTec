import express from 'express';
import { getUser, createUser } from '../controllers/UsersController.js';

const userRouter = express.Router();

// Rutas para acceder a los usuarios
userRouter.get('/:user/:password', getUser); // Obtener usuario

userRouter.post('/', createUser); // Crear usuario


export default userRouter;