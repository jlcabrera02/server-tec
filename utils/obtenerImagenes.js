"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerArchivos = exports.default = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const obtenerImagenes = (req, res) => {
  const nombreImagen = req.params.imagen;
  const rutaImagen = _path.default.join(__dirname, '../public/media/imagenes/', nombreImagen);

  // Utiliza fs para leer la imagen del volumen y enviarla como respuesta
  _fs.default.readFile(rutaImagen, (err, data) => {
    if (err) {
      res.status(404).send('Imagen no encontrada');
    } else {
      // Establece el encabezado Content-Type adecuado (p. ej., image/jpeg)
      res.contentType(`image/${nombreImagen.split('.')[1]}`);
      res.send(data);
    }
  });
};
const obtenerArchivos = (req, res) => {
  const nombreArchivo = req.params.archivo;
  const rutaImagen = _path.default.join(__dirname, '../public/media/archivos/', nombreArchivo);

  // Utiliza fs para leer la imagen del volumen y enviarla como respuesta
  _fs.default.readFile(rutaImagen, (err, data) => {
    if (err) {
      res.status(404).send('Imagen no encontrada');
    } else {
      // Establece el encabezado Content-Type adecuado (p. ej., image/jpeg)
      res.contentType(`application/${nombreArchivo.split('.')[1]}`);
      res.send(data);
    }
  });
};
exports.obtenerArchivos = obtenerArchivos;
var _default = obtenerImagenes;
exports.default = _default;