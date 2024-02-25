"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminarImagen = exports.default = void 0;
var _generadornombre = _interopRequireDefault(require("./generadornombre"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const subirImagen = ({
  imagenBase64,
  nomenclatura
}) => {
  const buffer = Buffer.from(imagenBase64.replace(/data:image\/\w*;base64/, ''), 'base64');
  const extencionArchivo = imagenBase64.substring('data:image/'.length, imagenBase64.indexOf(';base64'));
  const nombre = nomenclatura + (0, _generadornombre.default)() + '.' + extencionArchivo;
  _fs.default.writeFileSync(_path.default.join(__dirname, '../public/media/imagenes/', nombre), buffer);
  return {
    getNombre: () => nombre
  };
};
const eliminarImagen = ({
  pathImagen,
  nomenclatura
}) => {
  console.log(pathImagen);
  _fs.default.unlinkSync(_path.default.join(__dirname, '../public/media/imagenes', pathImagen.replace(`/api/${nomenclatura}/`, '')));
};
exports.eliminarImagen = eliminarImagen;
var _default = subirImagen;
exports.default = _default;