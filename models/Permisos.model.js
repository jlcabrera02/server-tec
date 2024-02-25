"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Permisos = _db.default.define('permisos', {
  idpermiso: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  permiso: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});
var _default = Permisos;
exports.default = _default;