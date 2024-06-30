// Conexión a la base de BD
import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const SellsModel = db.define('sells',{
    sellDate: {type: DataTypes.DATE},
    details: {type: DataTypes.JSON},
    total: {type: DataTypes.DOUBLE},
    user_id: {type: DataTypes.INTEGER}
});

export default SellsModel;