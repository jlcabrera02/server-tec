"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Blogs = _db.default.define('blogs', {
  idblog: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: _sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  contenido: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  estatus: {
    type: _sequelize.DataTypes.ENUM('aceptado', 'rechazado', 'pendiente'),
    allowNull: false,
    defaultValue: 'pendiente'
  },
  imagen: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  },
  fechavigente: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false
  }
});
var _default = Blogs;
exports.default = _default;