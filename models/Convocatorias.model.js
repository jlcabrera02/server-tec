"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Convocatoria = _db.default.define('convocatoria', {
  idconvocatoria: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: true
  },
  titulo: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  contenido: {
    type: _sequelize.DataTypes.TEXT('long'),
    allowNull: true
  },
  mostrar: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true
  },
  fecha: {
    type: _sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  imagen: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  pdf: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  },
  ruta: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  }
});
var _default = Convocatoria;
exports.default = _default;