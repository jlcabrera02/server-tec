import models from '@models/index';
const { Subcategorias } = models;

type cuerpo = {
  show?: boolean;
  idcategoria: number;
  subcategoria: string;
  descripcion: string;
  ruta: string;
};

type querys = {
  show: string;
};

export const obtenerSubcategorias = async (querys: querys) => {
  try {
    const filters = { show: true };

    if (querys.show === 'false') {
      filters['show'] = false;
    }

    if (querys.show === 'all') {
      delete filters['show'];
    }

    const crear = await Subcategorias.findAll({ where: filters });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const crearSubcategorias = async (cuerpo: cuerpo) => {
  try {
    const crear = await Subcategorias.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};

export const editarSubcategoria = async (
  cuerpo: cuerpo,
  idsubcategoria: number
) => {
  try {
    const actualizar = await Subcategorias.update(cuerpo, {
      where: { idsubcategoria }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarSubcategoria = async (idsubcategoria: number) => {
  try {
    const eliminar = await Subcategorias.destroy({
      where: { idsubcategoria }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
