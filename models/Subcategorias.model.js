"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Subcategorias = _db.default.define('subcategorias', {
  idsubcategoria: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idcategoria: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  subcategoria: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  show: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  ruta: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});
var _default = Subcategorias;
exports.default = _default;