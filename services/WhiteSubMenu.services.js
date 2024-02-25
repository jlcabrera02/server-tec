"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerSubMenus = exports.eliminarSubMenu = exports.editarSubMenu = exports.crearSubMenu = void 0;
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  WhiteSubMenu
} = _models.default;
const obtenerSubMenus = async () => {
  try {
    const crear = await WhiteSubMenu.findAll();
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.obtenerSubMenus = obtenerSubMenus;
const crearSubMenu = async cuerpo => {
  try {
    const crear = await WhiteSubMenu.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearSubMenu = crearSubMenu;
const editarSubMenu = async (cuerpo, idSubMenu) => {
  try {
    const actualizar = await WhiteSubMenu.update(cuerpo, {
      where: {
        idsubmenu: idSubMenu
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarSubMenu = editarSubMenu;
const eliminarSubMenu = async idSubMenu => {
  try {
    const eliminar = await WhiteSubMenu.destroy({
      where: {
        idsubmenu: idSubMenu
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarSubMenu = eliminarSubMenu;