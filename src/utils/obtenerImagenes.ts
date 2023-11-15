import fs from 'fs';
import path from 'path';

const obtenerImagenes = (req, res) => {
  const nombreImagen = req.params.imagen;

  const rutaImagen = path.join(
    __dirname,
    '../public/media/imagenes/',
    nombreImagen
  );

  // Utiliza fs para leer la imagen del volumen y enviarla como respuesta
  fs.readFile(rutaImagen, (err, data) => {
    if (err) {
      res.status(404).send('Imagen no encontrada');
    } else {
      // Establece el encabezado Content-Type adecuado (p. ej., image/jpeg)
      res.contentType(`image/${nombreImagen.split('.')[1]}`);
      res.send(data);
    }
  });
};

export const obtenerArchivos = (req, res) => {
  const nombreArchivo = req.params.archivo;

  const rutaImagen = path.join(
    __dirname,
    '../public/media/archivos/',
    nombreArchivo
  );

  // Utiliza fs para leer la imagen del volumen y enviarla como respuesta
  fs.readFile(rutaImagen, (err, data) => {
    if (err) {
      res.status(404).send('Imagen no encontrada');
    } else {
      // Establece el encabezado Content-Type adecuado (p. ej., image/jpeg)
      res.contentType(`application/${nombreArchivo.split('.')[1]}`);
      res.send(data);
    }
  });
};

export default obtenerImagenes;
