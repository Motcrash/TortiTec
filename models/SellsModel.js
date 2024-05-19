// Conexión a la base de BD
import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const SellsModel = db.define('sells',{
    sellDate: {type: DataTypes.DATE},
    total: {type: DataTypes.DOUBLE},
    details: {type: DataTypes.JSON},
});

export default SellsModel;