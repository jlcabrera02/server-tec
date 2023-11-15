"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerBlogs = exports.obtenerBlog = exports.nuevaImagen = exports.modificarEstatusBlog = exports.eliminarImagenes = exports.eliminarBlog = exports.editarImagenes = exports.editarImagenPrincipal = exports.editarImagenBlogPrincipal = exports.editarEtiquetas = exports.editarBlogTexto = exports.crearBlog = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _models = _interopRequireDefault(require("../models"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Blogs,
  Imagenes,
  Etiquetas,
  EtiquetasBlogs
} = _models.default;
const crearBlog = async ({
  cuerpo
}) => {
  try {
    const crearBlog = await Blogs.create({
      contenido: cuerpo.contenido,
      imagen: cuerpo.imagenPrincipal,
      fechavigente: cuerpo.fechaVigente,
      fecha: cuerpo.fecha,
      titulo: cuerpo.titulo
    });
    return crearBlog;
  } catch (err) {
    throw err;
  }
};
exports.crearBlog = crearBlog;
const obtenerBlogs = async ({
  query
}) => {
  try {
    const filtros = {};
    if (query.estatus) {
      filtros['estatus'] = query.estatus;
    }
    if (query.mostrarSinVigencia !== 'true') {
      filtros['fechavigente'] = {
        [_sequelize.Op.gt]: _db.default.literal('NOW()')
      };
    }
    const obtenerBlogs = await Blogs.findAll({
      where: filtros,
      limit: query.limit ? Number(query.limit) : null,
      include: Etiquetas,
      order: [['updatedAt', 'DESC']]
    });
    return obtenerBlogs;
  } catch (err) {
    throw err;
  }
};
exports.obtenerBlogs = obtenerBlogs;
const obtenerBlog = async ({
  idBlog
}) => {
  try {
    const obtenerBlog = await Blogs.findByPk(idBlog, {
      include: [{
        model: Etiquetas
      }]
    });
    if (!obtenerBlog) throw {
      success: false,
      msg: 'No existe el elemento'
    };
    return obtenerBlog;
  } catch (err) {
    throw err;
  }
};
exports.obtenerBlog = obtenerBlog;
const editarBlogTexto = async ({
  idBlog,
  cuerpo
}) => {
  try {
    const editarBlogs = await Blogs.update({
      contenido: cuerpo.contenido,
      fechavigente: cuerpo.fechaVigente,
      titulo: cuerpo.titulo,
      fecha: cuerpo.fecha
    }, {
      where: {
        idblog: idBlog
      }
    });
    return editarBlogs;
  } catch (err) {
    throw err;
  }
};
exports.editarBlogTexto = editarBlogTexto;
const editarImagenPrincipal = async ({
  idBlog,
  imagen
}) => {
  try {
    const editarBlogs = await Blogs.update({
      imagen: imagen
    }, {
      where: {
        idblog: idBlog
      }
    });
    return editarBlogs;
  } catch (err) {
    throw err;
  }
};
exports.editarImagenPrincipal = editarImagenPrincipal;
const nuevaImagen = async ({
  imagen
}) => {
  try {
    const editarImagen = await Imagenes.create({
      imagen: imagen
    });
    return editarImagen;
  } catch (err) {
    throw err;
  }
};
exports.nuevaImagen = nuevaImagen;
const editarImagenBlogPrincipal = async ({
  idBlog,
  imagen
}) => {
  try {
    const editarImagen = await Blogs.update({
      imagen: imagen
    }, {
      where: {
        idblog: idBlog
      }
    });
    return editarImagen;
  } catch (err) {
    throw err;
  }
};
exports.editarImagenBlogPrincipal = editarImagenBlogPrincipal;
const editarImagenes = async ({
  idImagen,
  imagen
}) => {
  try {
    const editarImagen = await Imagenes.update({
      imagen: imagen
    }, {
      where: {
        idimagen: idImagen
      }
    });
    return editarImagen;
  } catch (err) {
    throw err;
  }
};
exports.editarImagenes = editarImagenes;
const editarEtiquetas = async ({
  idblog,
  etiquetas
}) => {
  try {
    const crear = _db.default.transaction(async t => {
      await EtiquetasBlogs.destroy({
        where: {
          BlogIdblog: idblog
        },
        transaction: t
      });
      const etiquetasCreate = await EtiquetasBlogs.bulkCreate(etiquetas.map(idEtiqueta => ({
        BlogIdblog: Number(idblog),
        EtiquetaIdetiqueta: idEtiqueta
      })), {
        transaction: t
      });
      return etiquetasCreate;
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.editarEtiquetas = editarEtiquetas;
const eliminarImagenes = async ({
  idImagen
}) => {
  try {
    const eliminarImagen = await Imagenes.destroy({
      where: {
        idimagen: idImagen
      }
    });
    return eliminarImagen;
  } catch (err) {
    throw err;
  }
};
exports.eliminarImagenes = eliminarImagenes;
const eliminarBlog = async ({
  idBlog
}) => {
  try {
    const eliminarBlog = await Blogs.destroy({
      where: {
        idblog: idBlog
      }
    });
    return eliminarBlog;
  } catch (err) {
    throw err;
  }
};
exports.eliminarBlog = eliminarBlog;
const modificarEstatusBlog = async ({
  idBlog,
  estatus
}) => {
  try {
    const editarStatus = await Blogs.update({
      estatus
    }, {
      where: {
        idblog: idBlog
      }
    });
    return editarStatus;
  } catch (err) {
    throw err;
  }
};
exports.modificarEstatusBlog = modificarEstatusBlog;