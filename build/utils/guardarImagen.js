"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guardarArchivos = exports.default = void 0;
var _generadornombre = _interopRequireDefault(require("./generadornombre"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Esta función tiene la particularidad de alogar las imagenes que le cliente requiere guardar.
 
 * @property {multipart/form-data} imagen - contenido de la imagen.
 * @property {string} nomenclatura - Dscripción incial que ira al iniciar el nombre del elemento.
 */

const guardarImagen = ({
  imagen,
  nomenclatura
}) => {
  return new Promise((resolve, reject) => {
    const nombre = nomenclatura + (0, _generadornombre.default)() + '.' + imagen.mimetype.replace('image/', '');
    imagen.mv(_path.default.join(__dirname, '../public/media/imagenes/', nombre), err => {
      if (err) {
        return reject({
          success: false,
          code: 400,
          msg: 'Error al guardar la imagen'
        });
      }
      return resolve(nombre);
    });
  });
};
const guardarArchivos = ({
  archivo,
  nomenclatura
}) => {
  return new Promise((resolve, reject) => {
    const nombre = nomenclatura + (0, _generadornombre.default)() + '.' + archivo.mimetype.replace('application/', '');
    archivo.mv(_path.default.join(__dirname, '../public/media/archivos/', nombre), err => {
      if (err) {
        return reject({
          success: false,
          code: 400,
          msg: 'Error al guardar el documento'
        });
      }
      return resolve(nombre);
    });
  });
};
exports.guardarArchivos = guardarArchivos;
var _default = guardarImagen;
exports.default = _default;