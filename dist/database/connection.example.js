"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(/* 'db', */ /* 'user', */ /* 'pass', */ {
//host: '',
//dialect: '',
// logging: false
});
exports.default = db;
//# sourceMappingURL=connection.example.js.map