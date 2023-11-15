"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../models"));
var _Blogs = require("../services/Blogs.services");
var _guardarImagen = _interopRequireDefault(require("../utils/guardarImagen"));
var _eliminarImagen = _interopRequireDefault(require("../utils/eliminarImagen"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controller = {
  crearBlog: null,
  //
  obtenerBlog: null,
  //
  obtenerBlogs: null,
  //
  editarBlogTexto: null,
  //
  eliminarBlog: null,
  //
  modificarEstatus: null,
  //
  //Editar las imagenes de los blogs
  nuevaImagen: null,
  //
  editarImagenes: null,
  //
  editarEtiquetas: null,
  //
  eliminarImagen: null,
  //
  editarImagenPrincipal: null //
};

controller.crearBlog = async (req, res) => {
  try {
    const {
      imagenPrincipal
    } = req.files;
    const {
      contenido,
      titulo,
      fechaVigente,
      fecha
    } = JSON.parse(req.body.contenido);
    const imagenP = await (0, _guardarImagen.default)({
      imagen: imagenPrincipal,
      nomenclatura: 'blogs'
    });
    const response = await (0, _Blogs.crearBlog)({
      cuerpo: {
        contenido,
        imagenPrincipal: `/api/blogsimagenes/${imagenP}`,
        fechaVigente,
        fecha,
        titulo
      }
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
      msg: 'Error al ingresar un nuevo blogs'
    });
  }
};
controller.obtenerBlog = async (req, res) => {
  try {
    const response = await (0, _Blogs.obtenerBlog)({
      idBlog: req.params.idblog
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo blogs'
    });
  }
};
controller.obtenerBlogs = async (req, res) => {
  try {
    const response = await (0, _Blogs.obtenerBlogs)({
      query: req.query
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
      msg: 'Error al obtener los blogs'
    });
  }
};
controller.editarBlogTexto = async (req, res) => {
  try {
    const response = await (0, _Blogs.editarBlogTexto)({
      idBlog: req.params.idblog,
      cuerpo: req.body
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error editar el contenido del blog'
    });
  }
};
controller.nuevaImagen = async (req, res) => {
  try {
    const {
      imagen
    } = req.files;
    const nombre = await (0, _guardarImagen.default)({
      imagen,
      nomenclatura: 'blogs'
    });
    const response = await (0, _Blogs.nuevaImagen)({
      imagen: `/api/blogsimagenes/${nombre}`
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error editar la imagen'
    });
  }
};
controller.editarImagenPrincipal = async (req, res) => {
  try {
    const {
      imagen
    } = req.files;
    const imagenAnterior = await _models.default.Blogs.findByPk(req.params.idblog);
    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }
    const nombreImg = await (0, _guardarImagen.default)({
      imagen,
      nomenclatura: 'blogs'
    });
    const removeImg = (0, _eliminarImagen.default)(imagenAnterior.dataValues.imagen.replace('/api/blogsimagenes/', ''));
    const response = await (0, _Blogs.editarImagenBlogPrincipal)({
      idBlog: req.params.idblog,
      imagen: `/api/blogsimagenes/${nombreImg}`
    });
    res.status(200).json({
      success: true,
      response,
      removeImagePrevious: removeImg
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error editar la imagen'
    });
  }
};
controller.editarImagenes = async (req, res) => {
  try {
    const {
      imagen
    } = req.files;
    const imagenAnterior = await _models.default.Imagenes.findByPk(req.params.idimagen);
    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }
    const nombreImg = await (0, _guardarImagen.default)({
      imagen,
      nomenclatura: 'blogs'
    });
    const removeImg = (0, _eliminarImagen.default)(imagenAnterior.dataValues.imagen.replace('/api/blogsimagenes/', ''));
    const response = await (0, _Blogs.editarImagenes)({
      idImagen: req.params.idimagen,
      imagen: `/api/blogsimagenes/${nombreImg}`
    });
    res.status(200).json({
      success: true,
      response,
      removeImagePrevious: removeImg
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error editar la imagen'
    });
  }
};
controller.eliminarImagen = async (req, res) => {
  try {
    const imagenAnterior = await _models.default.Imagenes.findByPk(req.params.idimagen);
    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }
    const removeImg = (0, _eliminarImagen.default)(imagenAnterior.dataValues.imagen.replace('/api/blogsimagenes/', ''));
    const response = await (0, _Blogs.eliminarImagenes)({
      idImagen: Number(req.params.idimagen)
    });
    res.status(200).json({
      success: true,
      response,
      removeImg
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar la imagen'
    });
  }
};
controller.eliminarBlog = async (req, res) => {
  try {
    const imagenAnterior = await _models.default.Blogs.findByPk(req.params.idblog);
    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }
    const removeImg = (0, _eliminarImagen.default)(imagenAnterior.dataValues.imagen.replace('/api/blogsimagenes/', ''));
    const response = await (0, _Blogs.eliminarBlog)({
      idBlog: req.params.idblog
    });
    res.status(200).json({
      success: true,
      response,
      removeImg
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar el blog'
    });
  }
};
controller.modificarEstatus = async (req, res) => {
  try {
    const response = await (0, _Blogs.modificarEstatusBlog)({
      estatus: req.body.estatus,
      idBlog: req.params.idblog
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al modificar el estatus al blog'
    });
  }
};
controller.editarEtiquetas = async (req, res) => {
  try {
    const {
      idsEtiquetas
    } = req.body;
    const response = await (0, _Blogs.editarEtiquetas)({
      idblog: req.params.idblog,
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