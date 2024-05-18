import express from 'express';
import cors from 'cors';

import db from './database/db.js';

import sellsRoutes from './routes/SellsRouter.js';
import productsRoutes from './routes/ProductsRouter.js';
import userRoutes from './routes/UsersRouter.js';

const app = express();

app.use( cors() );
app.use( express.json() );
app.use('/sells', sellsRoutes);
app.use('/products', productsRoutes);
app.use('/users', userRoutes)

try {
    await db.authenticate();
    console.log('Conectado a la Base de datos');
} catch (error) {
    console.log('Error de conexión');
}

app.get('/', (req,res) => {
    res.send('Hola mundo')
});

app.listen(8000, () => {
    console.log('Server running in http://localhost:8000/');
})