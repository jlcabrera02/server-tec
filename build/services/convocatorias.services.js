"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerConvocatorias = exports.eliminarConvocatoria = exports.crearConvocatoria = exports.actualizarPDF = exports.actualizarImg = exports.actualizarDatos = void 0;
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Convocatorias
} = _models.default;
const obtenerConvocatorias = async query => {
  try {
    const convocatorias = await Convocatorias.findAll({
      order: query.order ? [[query.order, 'DESC']] : []
    });
    return convocatorias;
  } catch (err) {
    throw err;
  }
};
exports.obtenerConvocatorias = obtenerConvocatorias;
const crearConvocatoria = async cuerpo => {
  try {
    const createConvocatoria = await Convocatorias.create(cuerpo);
    return createConvocatoria;
  } catch (err) {
    throw err;
  }
};
exports.crearConvocatoria = crearConvocatoria;
const actualizarDatos = async cuerpo => {
  try {
    const actualizar = await Convocatorias.update({
      ...cuerpo
    }, {
      where: {
        idconvocatoria: cuerpo.idconvocatoria
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.actualizarDatos = actualizarDatos;
const actualizarPDF = async cuerpo => {
  try {
    const actualizar = await Convocatorias.update({
      ...cuerpo
    }, {
      where: {
        idconvocatoria: cuerpo.idconvocatoria
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.actualizarPDF = actualizarPDF;
const actualizarImg = async cuerpo => {
  try {
    const actualizar = await Convocatorias.update({
      ...cuerpo
    }, {
      where: {
        idconvocatoria: cuerpo.idconvocatoria
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.actualizarImg = actualizarImg;
const eliminarConvocatoria = async idconvocatoria => {
  try {
    const eliminar = await Convocatorias.destroy({
      where: {
        idconvocatoria: idconvocatoria
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarConvocatoria = eliminarConvocatoria;