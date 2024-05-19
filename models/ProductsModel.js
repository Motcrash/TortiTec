import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const ProductsModel = db.define('products', {
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.DOUBLE},
    cuantity: {type: DataTypes.INTEGER}
});

export default ProductsModel;