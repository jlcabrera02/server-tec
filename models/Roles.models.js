"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RolesAndPermisos = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Roles = _db.default.define('roles', {
  rol: {
    type: _sequelize.DataTypes.STRING,
    primaryKey: true
  }
});
const RolesAndPermisos = _db.default.define('roles_permisos', {});
exports.RolesAndPermisos = RolesAndPermisos;
var _default = Roles;
exports.default = _default;