"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerSubcategorias = exports.eliminarSubcategoria = exports.editarSubcategoria = exports.crearSubcategorias = void 0;
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Subcategorias
} = _models.default;
const obtenerSubcategorias = async querys => {
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
    const crear = await Subcategorias.findAll({
      where: filters
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.obtenerSubcategorias = obtenerSubcategorias;
const crearSubcategorias = async cuerpo => {
  try {
    const crear = await Subcategorias.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearSubcategorias = crearSubcategorias;
const editarSubcategoria = async (cuerpo, idsubcategoria) => {
  try {
    const actualizar = await Subcategorias.update(cuerpo, {
      where: {
        idsubcategoria
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarSubcategoria = editarSubcategoria;
const eliminarSubcategoria = async idsubcategoria => {
  try {
    const eliminar = await Subcategorias.destroy({
      where: {
        idsubcategoria
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarSubcategoria = eliminarSubcategoria;