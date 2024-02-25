"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const WhiteSubMenu = _db.default.define('white_submenu', {
  idsubmenu: {
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
    allowNull: false
  },
  idmenu: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true
});
var _default = WhiteSubMenu;
exports.default = _default;