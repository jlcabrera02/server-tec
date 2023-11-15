"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Imagenes = _db.default.define('imagenes', {
  idimagen: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});
var _default = Imagenes;
exports.default = _default;