"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Articulos = require("../services/Articulos.services");
const controller = {
  crearArticulo: null,
  obtenerArticulo: null,
  obtenerArticulos: null,
  actualizarArticulo: null,
  eliminarArticulo: null,
  editarEtiquetas: null
};
controller.crearArticulo = async (req, res) => {
  try {
    const {
      usuario
    } = req.usuario;
    const rutaExists = req.body.ruta;
    const ruta = rutaExists ? req.body.ruta : req.body.titulo.replaceAll(' ', '-').toLowerCase();
    const response = await (0, _Articulos.crearArticulo)({
      ...req.body,
      ruta,
      usuario
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo articulo'
    });
  }
};
controller.obtenerArticulos = async (req, res) => {
  try {
    const response = await (0, _Articulos.obtenerArticulos)(req.query);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener los articulos'
    });
  }
};
controller.obtenerArticulo = async (req, res) => {
  try {
    const response = await (0, _Articulos.obtenerArticulo)({
      ruta: req.params.ruta
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener articulo'
    });
  }
};
controller.actualizarArticulo = async (req, res) => {
  try {
    const response = await (0, _Articulos.editarArticulo)(req.body, req.params.idarticulo);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar articulo'
    });
  }
};
controller.eliminarArticulo = async (req, res) => {
  try {
    const response = await (0, _Articulos.eliminarArticulo)(req.params.idarticulo);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar articulo'
    });
  }
};
controller.editarEtiquetas = async (req, res) => {
  try {
    const {
      idsEtiquetas
    } = req.body;
    const response = await (0, _Articulos.editarEtiquetas)({
      idarticulo: req.params.idarticulo,
      etiquetas: idsEtiquetas
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al agregar etiquetas'
    });
  }
};
var _default = controller;
exports.default = _default;