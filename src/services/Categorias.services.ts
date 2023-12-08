import models from '@models/index';
const { Categorias } = models;

type cuerpo = {
  show?: boolean;
  dropcollapse?: boolean;
  categoria: string;
  descripcion: string;
  ruta?: string;
};

type querys = {
  show: string;
};

export const obtenerCategorias = async (querys: querys) => {
  try {
    const filters = { show: true };

    if (querys.show === 'false') {
      filters['show'] = false;
    }

    if (querys.show === 'all') {
      delete filters['show'];
    }

    const crear = await Categorias.findAll({ where: filters });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const crearCategorias = async (cuerpo: cuerpo) => {
  try {
    const crear = await Categorias.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};

export const editarCategoria = async (cuerpo: cuerpo, idcategoria: number) => {
  try {
    const actualizar = await Categorias.update(cuerpo, {
      where: { idcategoria }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarCategoria = async (idcategoria: number) => {
  try {
    const eliminar = await Categorias.destroy({
      where: { idcategoria }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
