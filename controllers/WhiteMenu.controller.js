"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _WhiteMenu = require("../services/WhiteMenu.services");
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
      url
    } = req.body;
    const response = await (0, _WhiteMenu.crearMenu)({
      nombre,
      url
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo menu'
    });
  }
};
controller.obtener = async (req, res) => {
  try {
    const response = await (0, _WhiteMenu.obtenerMenus)();
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener menus'
    });
  }
};
controller.editar = async (req, res) => {
  try {
    const response = await (0, _WhiteMenu.editarMenu)(req.body, req.params.idMenu);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar menu'
    });
  }
};
controller.eliminar = async (req, res) => {
  try {
    const response = await (0, _WhiteMenu.eliminarMenu)(req.params.idMenu);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar menu'
    });
  }
};
var _default = controller;
exports.default = _default;