"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _convocatorias = require("../services/convocatorias.services");
var _models = _interopRequireDefault(require("../models"));
var _guardarImagen = require("src/utils/guardarImagen");
var _eliminarImagen = _interopRequireDefault(require("src/utils/eliminarImagen"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controller = {
  crearConvocatoria: null,
  obtenerConvocatorias: null,
  actualizarConvocatoriasDatos: null,
  eliminarConvocatorias: null,
  actualizarPDF: null
};
controller.crearConvocatoria = async (req, res) => {
  try {
    const response = await (0, _convocatorias.crearConvocatoria)(req.body);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar una nueva convocatoria'
    });
  }
};
controller.obtenerConvocatorias = async (req, res) => {
  try {
    const response = await (0, _convocatorias.obtenerConvocatorias)(req.query);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener convocatorias'
    });
  }
};
controller.actualizarConvocatoriasDatos = async (req, res) => {
  try {
    const imagenAnterior = await _models.default.Convocatorias.findByPk(req.params.idconvocatoria);
    if (!imagenAnterior) throw {
      success: false,
      response: null,
      msg: 'No se encontro el elemento en la base de datos.'
    };
    const response = await (0, _convocatorias.actualizarDatos)({
      idconvocatoria: req.params.idconvocatoria,
      ...req.body
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
controller.actualizarPDF = async (req, res) => {
  try {
    const {
      file
    } = req.files;
    const imagenAnterior = await _models.default.Convocatorias.findByPk(req.params.idbanner);
    const nombrePdf = (0, _guardarImagen.guardarArchivos)({
      archivo: file,
      nomenclatura: 'convocatoria'
    });
    if (!imagenAnterior) throw {
      success: false,
      response: null,
      msg: 'No se encontro el elemento en la base de datos.'
    };
    const response = await (0, _convocatorias.actualizarPDF)({
      pdf: `/api/convocaPdf/${nombrePdf}`,
      idconvocatoria: req.params.idbanner
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

/* 
controller.eliminarBanner = async (req, res) => {
  try {
    const imagenAnterior = await models.Banners.findByPk(req.params.idbanner);

    if (!imagenAnterior)
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };

    const response = await eliminarBanner({
      idBanner: req.params.idbanner
    });

    const removeImagePrevious = eliminarImagen(
      imagenAnterior.dataValues.imagen.replace('/api/bannersimagenes/', '')
    );

    res.status(200).json({ success: true, response, removeImagePrevious });
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
    const { vigente } = req.body;
    const response = await editarVigencia({
      cuerpo: { mostrar: vigente ? true : false },
      idBanner: req.params.idbanner
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
}; */
var _default = controller;
exports.default = _default;