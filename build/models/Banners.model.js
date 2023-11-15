"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Banners = _db.default.define('Banners', {
  idbanner: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  mostrar: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  usuario: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  }
});
var _default = Banners;
exports.default = _default;