import {Sequelize} from 'sequelize';

const db = new Sequelize('tortitec_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;