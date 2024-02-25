"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Categorias = _db.default.define('categorias', {
  idcategoria: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  show: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  dropcollapse: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: 'Es para identificar si sera un enlace o dentro de ella habra mas enlaces que le pertenezcan, en el caso que sea un solo link necesita rellenar el campo ruta.'
  },
  categoria: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  ruta: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  }
});
var _default = Categorias;
exports.default = _default;