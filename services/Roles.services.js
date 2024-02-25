"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerRoles = exports.eliminarMenu = exports.crearRol = void 0;
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  WhiteMenu,
  Roles
} = _models.default;
const obtenerRoles = async () => {
  try {
    const crear = await Roles.findAll();
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.obtenerRoles = obtenerRoles;
const crearRol = async cuerpo => {
  try {
    const crear = await Roles.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearRol = crearRol;
const eliminarMenu = async rol => {
  try {
    const eliminar = await WhiteMenu.destroy({
      where: {
        rol
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarMenu = eliminarMenu;