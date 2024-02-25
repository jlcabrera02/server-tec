"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerArticulos = exports.obtenerArticulo = exports.eliminarArticulo = exports.editarEtiquetas = exports.editarArticulo = exports.crearArticulo = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Articulos,
  EtiquetasArticulos,
  Etiquetas
} = _models.default;
const obtenerArticulos = async querys => {
  try {
    const filters = {};
    if (querys.asignados === 'sinruta') {
      filters['ruta'] = null;
    }
    const crear = await Articulos.findAll({
      where: filters
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.obtenerArticulos = obtenerArticulos;
const obtenerArticulo = async querys => {
  try {
    const filters = {};
    if (querys.ruta) {
      filters['ruta'] = querys.ruta;
    }
    const crear = await Articulos.findOne({
      where: filters,
      include: Etiquetas
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.obtenerArticulo = obtenerArticulo;
const crearArticulo = async cuerpo => {
  try {
    const crear = await Articulos.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearArticulo = crearArticulo;
const editarArticulo = async (cuerpo, idarticulo) => {
  try {
    const actualizar = await Articulos.update(cuerpo, {
      where: {
        idarticulo
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarArticulo = editarArticulo;
const eliminarArticulo = async idarticulo => {
  try {
    const eliminar = await Articulos.destroy({
      where: {
        idarticulo
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarArticulo = eliminarArticulo;
const editarEtiquetas = async ({
  idarticulo,
  etiquetas
}) => {
  try {
    const crear = _db.default.transaction(async t => {
      await EtiquetasArticulos.destroy({
        where: {
          articuloIdarticulo: idarticulo
        },
        transaction: t
      });
      const etiquetasCreate = await EtiquetasArticulos.bulkCreate(etiquetas.map(idEtiqueta => ({
        articuloIdarticulo: Number(idarticulo),
        etiquetaIdetiqueta: idEtiqueta
      })), {
        transaction: t
      });
      return etiquetasCreate;
    });
    return crear;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
exports.editarEtiquetas = editarEtiquetas;