"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _WhiteSubMenu = require("../services/WhiteSubMenu.services");
const controller = {
  crear: null,
  obtener: null,
  editar: null,
  eliminar: null
};
controller.crear = async (req, res) => {
  try {
    // const { usuario } = req.usuario;
    const {
      nombre,
      url,
      idMenu
    } = req.body;
    const response = await (0, _WhiteSubMenu.crearSubMenu)({
      nombre,
      url,
      idmenu: idMenu
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo submenu'
    });
  }
};
controller.obtener = async (req, res) => {
  try {
    const response = await (0, _WhiteSubMenu.obtenerSubMenus)();
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener submenus'
    });
  }
};
controller.editar = async (req, res) => {
  try {
    const response = await (0, _WhiteSubMenu.editarSubMenu)(req.body, req.params.idSubMenu);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar submenu'
    });
  }
};
controller.eliminar = async (req, res) => {
  try {
    const response = await (0, _WhiteSubMenu.eliminarSubMenu)(req.params.idSubMenu);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar submenu'
    });
  }
};
var _default = controller;
exports.default = _default;