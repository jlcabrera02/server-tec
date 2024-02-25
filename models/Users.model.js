"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelizeBcrypt = _interopRequireDefault(require("sequelize-bcrypt"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Users = _db.default.define('usuarios', {
  usuario: {
    type: _sequelize.DataTypes.STRING,
    primaryKey: true
  },
  nombres: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  apepat: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  apemat: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  rol: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});
(0, _sequelizeBcrypt.default)(Users, {
  field: 'password',
  rounds: 12,
  compare: 'authenticate'
});
var _default = Users;
exports.default = _default;