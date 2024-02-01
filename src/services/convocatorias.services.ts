import models from '@models/index';
const { Convocatorias } = models;

type cuerpo = {
  titulo: string;
  fecha: string;
  descripcion?: string;
  imagen: string;
  pdf: string;
};

type orderConvocatoria = 'idconvocatoria' | 'fecha';

export const obtenerConvocatorias = async (query: {
  order?: orderConvocatoria;
  showAll?: any;
}) => {
  try {
    const filtros = { mostrar: true };

    if (query.showAll) {
      delete filtros.mostrar;
    }

    const convocatorias = await Convocatorias.findAll({
      where: filtros,
      order: query.order ? [[query.order, 'DESC']] : []
    });
    return convocatorias;
  } catch (err) {
    throw err;
  }
};

export const obtenerConvocatoria = async (ruta: string) => {
  try {
    const convocatorias = await Convocatorias.findOne({
      where: { ruta }
    });
    return convocatorias;
  } catch (err) {
    throw err;
  }
};

export const crearConvocatoria = async (cuerpo: cuerpo) => {
  try {
    const createConvocatoria = await Convocatorias.create(cuerpo);
    return createConvocatoria;
  } catch (err) {
    throw err;
  }
};

export const actualizarDatos = async (
  cuerpo: Omit<cuerpo, 'imagen' | 'pdf'> & { idconvocatoria: number }
) => {
  try {
    const actualizar = await Convocatorias.update(
      { ...cuerpo },
      { where: { idconvocatoria: cuerpo.idconvocatoria } }
    );
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const actualizarPDF = async (
  cuerpo: Omit<cuerpo, 'imagen' | 'descripcion' | 'titulo' | 'fecha'> & {
    idconvocatoria: number;
  }
) => {
  try {
    const actualizar = await Convocatorias.update(
      { ...cuerpo },
      { where: { idconvocatoria: cuerpo.idconvocatoria } }
    );
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const actualizarImg = async (
  cuerpo: Omit<cuerpo, 'pdf' | 'descripcion' | 'titulo' | 'fecha'> & {
    idconvocatoria: number;
  }
) => {
  try {
    const actualizar = await Convocatorias.update(
      { ...cuerpo },
      { where: { idconvocatoria: cuerpo.idconvocatoria } }
    );
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarConvocatoria = async (idconvocatoria: number) => {
  try {
    const eliminar = await Convocatorias.destroy({
      where: { idconvocatoria: idconvocatoria }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
