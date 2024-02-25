"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const WhiteMenu = _db.default.define('white_menu', {
  idmenu: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: true
  }
}, {
  freezeTableName: true
});
var _default = WhiteMenu;
exports.default = _default;