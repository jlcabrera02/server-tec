"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerCategorias = exports.eliminarCategoria = exports.editarCategoria = exports.crearCategorias = void 0;
var _Subcategorias = _interopRequireDefault(require("../models/Subcategorias.model"));
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Categorias
} = _models.default;
const obtenerCategorias = async querys => {
  try {
    const filters = {
      show: true
    };
    if (querys.show === 'false') {
      filters['show'] = false;
    }
    if (querys.show === 'all') {
      delete filters['show'];
    }
    const crear = await Categorias.findAll({
      where: filters,
      include: _Subcategorias.default
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.obtenerCategorias = obtenerCategorias;
const crearCategorias = async cuerpo => {
  try {
    const crear = await Categorias.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearCategorias = crearCategorias;
const editarCategoria = async (cuerpo, idcategoria) => {
  try {
    const actualizar = await Categorias.update(cuerpo, {
      where: {
        idcategoria
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarCategoria = editarCategoria;
const eliminarCategoria = async idcategoria => {
  try {
    const eliminar = await Categorias.destroy({
      where: {
        idcategoria
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarCategoria = eliminarCategoria;