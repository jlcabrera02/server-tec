"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Banners = require("../services/Banners.services");
var _models = _interopRequireDefault(require("../models"));
var _guardarImagen = _interopRequireDefault(require("src/utils/guardarImagen"));
var _eliminarImagen = _interopRequireDefault(require("src/utils/eliminarImagen"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controller = {
  crearBanner: null,
  obtenerBanners: null,
  actualizarBanner: null,
  eliminarBanner: null,
  vigenciaBanner: null,
  obtenerImagenesBanners: null
};
controller.crearBanner = async (req, res) => {
  try {
    const {
      imagen
    } = req.files;
    const nombre = await (0, _guardarImagen.default)({
      imagen,
      nomenclatura: 'banner'
    });
    const response = await (0, _Banners.crearBanner)({
      cuerpo: {
        imagen: `/api/bannersimagenes/${nombre}`
      }
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo banner'
    });
  }
};
controller.obtenerBanners = async (req, res) => {
  try {
    const response = await (0, _Banners.obtenerBanners)({
      querys: req.query
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener los banners'
    });
  }
};
controller.actualizarBanner = async (req, res) => {
  try {
    const {
      imagen
    } = req.files;
    const imagenAnterior = await _models.default.Banners.findByPk(req.params.idbanner);
    if (!imagenAnterior) throw {
      success: false,
      response: null,
      msg: 'No se encontro el elemento en la base de datos.'
    };
    const nombre = await (0, _guardarImagen.default)({
      imagen,
      nomenclatura: 'banner'
    });
    const response = await (0, _Banners.editarBanner)({
      cuerpo: {
        ...req.body,
        imagen: `/api/bannersimagenes/${nombre}`
      },
      idBanner: req.params.idbanner
    });
    const removeImagePrevious = (0, _eliminarImagen.default)(imagenAnterior.dataValues.imagen.replace('/api/bannersimagenes/', ''));
    res.status(200).json({
      success: true,
      response,
      removeImagePrevious
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
};
controller.eliminarBanner = async (req, res) => {
  try {
    const imagenAnterior = await _models.default.Banners.findByPk(req.params.idbanner);
    if (!imagenAnterior) throw {
      success: false,
      response: null,
      msg: 'No se encontro el elemento en la base de datos.'
    };
    const response = await (0, _Banners.eliminarBanner)({
      idBanner: req.params.idbanner
    });
    const removeImagePrevious = (0, _eliminarImagen.default)(imagenAnterior.dataValues.imagen.replace('/api/bannersimagenes/', ''));
    res.status(200).json({
      success: true,
      response,
      removeImagePrevious
    });
  } catch (err) {
    res.status(err.code || 400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar el banner'
    });
  }
};
controller.vigenciaBanner = async (req, res) => {
  try {
    const {
      vigente
    } = req.body;
    const response = await (0, _Banners.editarVigencia)({
      cuerpo: {
        mostrar: vigente ? true : false
      },
      idBanner: req.params.idbanner
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
};
var _default = controller;
exports.default = _default;