"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerBanners = exports.eliminarBanner = exports.editarVigencia = exports.editarURL = exports.editarBanner = exports.crearBanner = void 0;
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Banners
} = _models.default;
const obtenerBanners = async ({
  querys
}) => {
  try {
    const filters = {};
    if (querys.mostrar === 'caducas') {
      filters['mostrar'] = false;
    }
    if (querys.mostrar === 'vigentes') {
      filters['mostrar'] = true;
    }
    const crear = await Banners.findAll({
      where: filters
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.obtenerBanners = obtenerBanners;
const crearBanner = async ({
  cuerpo
}) => {
  try {
    const {
      imagen,
      usuario
    } = cuerpo;
    const crear = await Banners.create({
      imagen,
      mostrar: true,
      usuario
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearBanner = crearBanner;
const editarBanner = async ({
  cuerpo,
  idBanner
}) => {
  try {
    const {
      imagen
    } = cuerpo;
    const actualizar = await Banners.update({
      imagen,
      usuario: 'cabrera'
    }, {
      where: {
        idbanner: idBanner
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarBanner = editarBanner;
const editarVigencia = async ({
  cuerpo,
  idBanner
}) => {
  try {
    const {
      mostrar
    } = cuerpo;
    const actualizar = await Banners.update({
      mostrar
    }, {
      where: {
        idbanner: idBanner
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarVigencia = editarVigencia;
const eliminarBanner = async ({
  idBanner
}) => {
  try {
    const eliminar = await Banners.destroy({
      where: {
        idbanner: idBanner
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarBanner = eliminarBanner;
const editarURL = async ({
  url,
  idBanner,
  eliminar
}) => {
  try {
    const actualizar = await Banners.update({
      url: eliminar ? null : url
    }, {
      where: {
        idbanner: idBanner
      }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};
exports.editarURL = editarURL;