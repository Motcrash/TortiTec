import express from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controllers/UsersController.js';

const userRouter = express.Router();

// Rutas para acceder a los usuarios
userRouter.get('/:user/:password', getUser); // Obtener usuario


export default userRouter;