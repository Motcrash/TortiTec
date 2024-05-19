import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const StockModel = db.define('stocks', {
    quantity: {type: DataTypes.INTEGER}
});

export default StockModel;