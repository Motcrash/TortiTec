import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const ProductsModel = db.define('vw_main', {
    title: {type: DataTypes.STRING},
    price: {type: DataTypes.DOUBLE},
    quantity: {type: DataTypes.INTEGER},
    img_source: {type: DataTypes.STRING},
    stock: {type: DataTypes.INTEGER},
},{
    freezeTableName: true,
});

export default ProductsModel;