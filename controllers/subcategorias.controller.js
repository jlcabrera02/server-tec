"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Subcategorias = require("../services/Subcategorias.services");
const controller = {
  crearSubcategoria: null,
  obtenerSubcategorias: null,
  actualizarSubcategoria: null,
  eliminarSubcategoria: null
};
controller.crearSubcategoria = async (req, res) => {
  try {
    const ruta = req.body.subcategoria.replaceAll(' ', '-').toLowerCase();
    const response = await (0, _Subcategorias.crearSubcategorias)({
      ruta,
      ...req.body
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar una nueva subcategoría'
    });
  }
};
controller.obtenerSubcategorias = async (req, res) => {
  try {
    const response = await (0, _Subcategorias.obtenerSubcategorias)(req.query);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener las subcategorias'
    });
  }
};
controller.actualizarSubcategoria = async (req, res) => {
  try {
    const response = await (0, _Subcategorias.editarSubcategoria)(req.body, req.params.idsubcategoria);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar la subcategoria'
    });
  }
};
controller.eliminarSubcategoria = async (req, res) => {
  try {
    const response = await (0, _Subcategorias.eliminarSubcategoria)(req.params.idsubcategoria);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar la subcategoria'
    });
  }
};
var _default = controller;
exports.default = _default;