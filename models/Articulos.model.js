"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Los articulos son las diferentes secciones que se manejaran en el sitio web.

const Articulos = _db.default.define('articulos', {
  idarticulo: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  contenido: {
    type: _sequelize.DataTypes.TEXT('long'),
    allowNull: false
  },
  fecha: {
    type: _sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  ruta: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true,
    comment: 'Llevara una ruta que coincida con una subcategoria o categoria o cualquier elemento necesario'
  },
  usuario: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});
var _default = Articulos;
exports.default = _default;