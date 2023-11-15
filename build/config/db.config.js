"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _dotenv = require("dotenv");
(0, _dotenv.config)();
const sequelize = new _sequelize.Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
  host: process.env.HOST_DB,
  port: Number(process.env.PORT_DB),
  dialect: 'mysql'
});
sequelize.authenticate().then(ss => console.log('conectado', ss)).catch(err => console.log(err));
var _default = sequelize;
exports.default = _default;