"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Categorias = require("../services/Categorias.services");
const controller = {
  crearCategoria: null,
  obtenerCategorias: null,
  actualizarCategoria: null,
  eliminarCategoria: null
};
controller.crearCategoria = async (req, res) => {
  try {
    const response = await (0, _Categorias.crearCategorias)(req.body);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar una nueva categoría'
    });
  }
};
controller.obtenerCategorias = async (req, res) => {
  try {
    const response = await (0, _Categorias.obtenerCategorias)(req.query);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener las categorias'
    });
  }
};
controller.actualizarCategoria = async (req, res) => {
  try {
    const response = await (0, _Categorias.editarCategoria)(req.body, req.params.idcategoria);
    res.status(200).json({
      success: true,
      response
    });
    console.log('err');
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar la categoria'
    });
  }
};
controller.eliminarCategoria = async (req, res) => {
  try {
    const response = await (0, _Categorias.eliminarCategoria)(req.params.idcategoria);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar la categoria'
    });
  }
};
var _default = controller;
exports.default = _default;