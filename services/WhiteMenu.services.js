"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerMenus = exports.eliminarMenu = exports.editarMenu = exports.crearMenu = void 0;
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  WhiteMenu,
  WhiteSubMenu
} = _models.default;
const obtenerMenus = async () => {
  try {
    const crear = await WhiteMenu.findAll({
      include: WhiteSubMenu
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.obtenerMenus = obtenerMenus;
const crearMenu = async cuerpo => {
  try {
    const crear = await WhiteMenu.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearMenu = crearMenu;
const editarMenu = async (cuerpo, idMenu) => {
  try {
    const actualizar = await WhiteMenu.update(cuerpo, {
      where: {
        idmenu: idMenu
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarMenu = editarMenu;
const eliminarMenu = async idMenu => {
  try {
    const eliminar = await WhiteMenu.destroy({
      where: {
        idmenu: idMenu
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarMenu = eliminarMenu;