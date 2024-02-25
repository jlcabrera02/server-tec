"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerEtiquetas = exports.eliminarEtiqueta = exports.editarEtiqueta = exports.crearEtiqueta = void 0;
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Etiquetas
} = _models.default;
const obtenerEtiquetas = async () => {
  try {
    const etiquetas = await Etiquetas.findAll();
    return etiquetas;
  } catch (err) {
    throw err;
  }
};
exports.obtenerEtiquetas = obtenerEtiquetas;
const crearEtiqueta = async ({
  etiqueta
}) => {
  try {
    const crear = await Etiquetas.create({
      etiqueta
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearEtiqueta = crearEtiqueta;
const editarEtiqueta = async ({
  etiqueta,
  idEtiqueta
}) => {
  try {
    const actualizar = await Etiquetas.update({
      etiqueta
    }, {
      where: {
        idetiqueta: idEtiqueta
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarEtiqueta = editarEtiqueta;
const eliminarEtiqueta = async ({
  idEtiqueta
}) => {
  try {
    const eliminar = await Etiquetas.destroy({
      where: {
        idetiqueta: idEtiqueta
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarEtiqueta = eliminarEtiqueta;