import sequelize from '@config/db.config';
import models from '@models/index';
const { Articulos, EtiquetasArticulos, Etiquetas } = models;

type cuerpo = {
  fecha: string;
  contenido: string;
  match_route: string;
  usuario: string;
};

type querys = {
  asignados: string;
  ruta: string;
};

export const obtenerArticulos = async (querys: querys) => {
  try {
    const filters = {};

    if (querys.asignados === 'sinruta') {
      filters['ruta'] = null;
    }

    const crear = await Articulos.findAll({ where: filters });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const obtenerArticulo = async (querys: Omit<querys, 'asignados'>) => {
  try {
    const filters = {};

    if (querys.ruta) {
      filters['ruta'] = querys.ruta;
    }

    const crear = await Articulos.findOne({
      where: filters,
      include: Etiquetas
    });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const crearArticulo = async (cuerpo: cuerpo) => {
  try {
    const crear = await Articulos.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};

export const editarArticulo = async (cuerpo: cuerpo, idarticulo: number) => {
  try {
    const actualizar = await Articulos.update(cuerpo, {
      where: { idarticulo }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarArticulo = async (idarticulo: number) => {
  try {
    const eliminar = await Articulos.destroy({
      where: { idarticulo }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};

export const editarEtiquetas = async ({
  idarticulo,
  etiquetas
}: {
  idarticulo: number;
  etiquetas: number[];
}) => {
  try {
    const crear = sequelize.transaction(async (t) => {
      await EtiquetasArticulos.destroy({
        where: { articuloIdarticulo: idarticulo },
        transaction: t
      });

      const etiquetasCreate = await EtiquetasArticulos.bulkCreate(
        etiquetas.map((idEtiqueta: number) => ({
          articuloIdarticulo: Number(idarticulo),
          etiquetaIdetiqueta: idEtiqueta
        })),
        { transaction: t }
      );

      return etiquetasCreate;
    });

    return crear;
  } catch (err) {
    console.log(err);

    throw err;
  }
};
