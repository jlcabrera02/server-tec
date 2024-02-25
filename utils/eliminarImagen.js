"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminarArchivo = exports.default = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const eliminarImagen = pathImagen => {
  try {
    _fs.default.unlinkSync(_path.default.join(__dirname, '../public/media/imagenes', pathImagen));
    return true;
  } catch (err) {
    return false;
  }
};
const eliminarArchivo = pathImagen => {
  try {
    _fs.default.unlinkSync(_path.default.join(__dirname, '../public/media/archivos', pathImagen));
    return true;
  } catch (err) {
    return false;
  }
};
exports.eliminarArchivo = eliminarArchivo;
var _default = eliminarImagen;
exports.default = _default;