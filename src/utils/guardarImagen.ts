import generadornombre from './generadornombre';
import path from 'path';

const guardarImagen = ({ imagen, nomenclatura }) => {
  return new Promise((resolve, reject) => {
    const nombre =
      nomenclatura +
      generadornombre() +
      '.' +
      imagen.mimetype.replace('image/', '');

    imagen.mv(
      path.join(__dirname, '../public/media/imagenes/', nombre),
      (err) => {
        if (err) {
          return reject({
            success: false,
            code: 400,
            msg: 'Error al guardar la imagen'
          });
        }
        return resolve(nombre);
      }
    );
  });
};

export default guardarImagen;
