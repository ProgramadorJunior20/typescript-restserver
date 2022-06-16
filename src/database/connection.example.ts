import { Sequelize } from 'sequelize';

const db = new Sequelize(/* 'db', */ /* 'user', */ /* 'pass', */ {
    //host: '',
    //dialect: '',
    // logging: false
})

export default db;