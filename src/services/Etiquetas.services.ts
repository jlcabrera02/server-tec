import models from '@models/index';
const { Etiquetas } = models;

type cuerpo = {
  etiqueta: string;
};

type edit = cuerpo & { idEtiqueta: number };

export const obtenerEtiquetas = async () => {
  try {
    const etiquetas = await Etiquetas.findAll();
    return etiquetas;
  } catch (err) {
    throw err;
  }
};

export const crearEtiqueta = async ({ etiqueta }: cuerpo) => {
  try {
    const crear = await Etiquetas.create({
      etiqueta
    });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const editarEtiqueta = async ({ etiqueta, idEtiqueta }: edit) => {
  try {
    const actualizar = await Etiquetas.update(
      { etiqueta },
      { where: { idetiqueta: idEtiqueta } }
    );
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarEtiqueta = async ({
  idEtiqueta
}: Omit<edit, 'etiqueta'>) => {
  try {
    const eliminar = await Etiquetas.destroy({
      where: { idetiqueta: idEtiqueta }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
