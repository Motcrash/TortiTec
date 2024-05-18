import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const UsersModel = db.define('users', {
    user: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
});

export default UsersModel;