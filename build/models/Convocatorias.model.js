"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Convocatoria = _db.default.define('Convocatoria', {
  idconvocatoria: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  decripcion: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: true
  },
  titulo: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
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
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  }
});
var _default = Convocatoria;
exports.default = _default;