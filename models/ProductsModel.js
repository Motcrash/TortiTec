import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const ProductsModel = db.define('products', {
    user_id: {type: DataTypes.INTEGER},
    title: {type: DataTypes.STRING},
    price: {type: DataTypes.DOUBLE},
    image: {type: DataTypes.TEXT},
    description: {type: DataTypes.TEXT},
    stock: {type: DataTypes.INTEGER},
    isActive: {type: DataTypes.BOOLEAN},
});

export default ProductsModel;