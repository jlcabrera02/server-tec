"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _convocatorias = require("../services/convocatorias.services");
var _models = _interopRequireDefault(require("../models"));
var _guardarImagen = _interopRequireWildcard(require("../utils/guardarImagen"));
var _eliminarImagen = _interopRequireWildcard(require("../utils/eliminarImagen"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controller = {
  crearConvocatoria: null,
  subirArchivo: null,
  obtenerConvocatorias: null,
  obtenerConvocatoria: null,
  actualizarConvocatoriasDatos: null,
  actualizarPDF: null,
  actualizarImagen: null,
  eliminarConvocatoria: null
};
controller.subirArchivo = async (req, res) => {
  try {
    const {
      file
    } = req.files;
    const pdfName = await (0, _guardarImagen.guardarArchivos)({
      archivo: file,
      nomenclatura: ''
    });
    res.status(200).json({
      success: true,
      response: `/api/convocatoria/archivos/${pdfName}`
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al subir pdf'
    });
  }
};
controller.crearConvocatoria = async (req, res) => {
  try {
    let rutaArchivoPDF = null;
    const {
      pdf,
      imagen
    } = req.files;
    const {
      titulo,
      fecha,
      descripcion,
      ruta,
      contenido
    } = JSON.parse(req.body.body);
    const moreContent = {
      ruta: null,
      contenido: null
    };
    const imagenName = await (0, _guardarImagen.default)({
      imagen: imagen,
      nomenclatura: 'imagenconvoca'
    });
    if (!pdf) {
      const rutas = ruta ? ruta : req.body.titulo.replaceAll(' ', '-').toLowerCase();
      moreContent.ruta = rutas;
      moreContent.contenido = contenido;
    } else {
      const pdfName = await (0, _guardarImagen.guardarArchivos)({
        archivo: pdf,
        nomenclatura: 'pdfconvoca'
      });
      rutaArchivoPDF = `/api/convocatoria/archivos/${pdfName}`;
    }
    const response = await (0, _convocatorias.crearConvocatoria)({
      titulo,
      fecha,
      descripcion,
      pdf: rutaArchivoPDF,
      imagen: `/api/convocatoria/imagen/${imagenName}`,
      ...moreContent
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    // console.log(err);

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
controller.obtenerConvocatoria = async (req, res) => {
  try {
    console.log(req.params);
    const response = await (0, _convocatorias.obtenerConvocatoria)(req.params.url);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener convocatoria'
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
controller.actualizarPDF = async (req, res) => {
  try {
    const {
      pdf
    } = req.files;
    const imagenAnterior = await _models.default.Convocatorias.findByPk(req.params.idconvocatoria);
    if (!imagenAnterior) throw {
      success: false,
      response: null,
      msg: 'No se encontro el elemento en la base de datos.'
    };
    const nombrePdf = await (0, _guardarImagen.guardarArchivos)({
      archivo: pdf,
      nomenclatura: 'pdfconvoca'
    });
    const response = await (0, _convocatorias.actualizarPDF)({
      pdf: `/api/convocatoria/archivos/${nombrePdf}`,
      idconvocatoria: req.params.idconvocatoria
    });
    const removePdfPrevius = (0, _eliminarImagen.eliminarArchivo)(imagenAnterior.dataValues.pdf.replace('/api/convocatoria/archivos/', ''));
    res.status(200).json({
      success: true,
      response,
      removePdfPrevius
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
};
controller.actualizarImagen = async (req, res) => {
  try {
    const {
      imagen
    } = req.files;
    const imagenAnterior = await _models.default.Convocatorias.findByPk(req.params.idconvocatoria);
    if (!imagenAnterior) throw {
      success: false,
      response: null,
      msg: 'No se encontro el elemento en la base de datos.'
    };
    const nombreImg = await (0, _guardarImagen.default)({
      imagen: imagen,
      nomenclatura: 'imagenconvoca'
    });
    const response = await (0, _convocatorias.actualizarImg)({
      imagen: `/api/convocatoria/imagen/${nombreImg}`,
      idconvocatoria: req.params.idconvocatoria
    });
    const removeImgPrevius = await (0, _eliminarImagen.default)(imagenAnterior.dataValues.imagen.replace('/api/convocatoria/imagen/', ''));
    res.status(200).json({
      success: true,
      response,
      removeImgPrevius
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
};
controller.eliminarConvocatoria = async (req, res) => {
  try {
    const imagenAnterior = await _models.default.Convocatorias.findByPk(req.params.idconvocatoria);
    if (!imagenAnterior) throw {
      success: false,
      response: null,
      msg: 'No se encontro el elemento en la base de datos.'
    };
    const response = await (0, _convocatorias.eliminarConvocatoria)(req.params.idconvocatoria);
    const removeImagePrevious = (0, _eliminarImagen.default)(imagenAnterior.dataValues.imagen.replace('/api/convocatoria/imagen/', ''));
    const removePdfPrevious = (0, _eliminarImagen.eliminarArchivo)(imagenAnterior.dataValues.pdf.replace('/api/convocatoria/archivos/', ''));
    res.status(200).json({
      success: true,
      response,
      removeImagePrevious,
      removePdfPrevious
    });
  } catch (err) {
    console.log(err);
    res.status(err.code || 400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar convocatoria'
    });
  }
};
var _default = controller;
exports.default = _default;