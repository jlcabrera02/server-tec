import generadornombre from './generadornombre';
import fs from 'fs';
import path from 'path';

const subirImagen = ({ imagenBase64, nomenclatura }) => {
  const buffer = Buffer.from(
    imagenBase64.replace(/data:image\/\w*;base64/, ''),
    'base64'
  );
  const extencionArchivo = imagenBase64.substring(
    'data:image/'.length,
    imagenBase64.indexOf(';base64')
  );

  const nombre = nomenclatura + generadornombre() + '.' + extencionArchivo;

  fs.writeFileSync(
    path.join(__dirname, '../public/media/imagenes/', nombre),
    buffer
  );

  return {
    getNombre: () => nombre
  };
};

export const eliminarImagen = ({ pathImagen, nomenclatura }) => {
  console.log(pathImagen);

  fs.unlinkSync(
    path.join(
      __dirname,
      '../public/media/imagenes',
      pathImagen.replace(`/api/${nomenclatura}/`, '')
    )
  );
};

export default subirImagen;
