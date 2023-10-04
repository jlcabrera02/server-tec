import fs from 'fs';
import path from 'path';

const eliminarImagen = (pathImagen: string) => {
  try {
    fs.unlinkSync(path.join(__dirname, '../public/media/imagenes', pathImagen));
    return true;
  } catch (err) {
    return false;
  }
};

export default eliminarImagen;
