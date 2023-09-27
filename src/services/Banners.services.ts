import models from '@models/index';
const { Banners } = models;

type cuerpo = {
  imagen?: string;
  mostrar?: boolean;
  usuario?: string;
};

interface propsCrearBanners {
  cuerpo: cuerpo;
}

interface propsEditarBanner {
  idBanner: number;
  cuerpo?: cuerpo;
}

interface querys {
  querys: {
    mostrar: 'caducas' | 'vigentes';
  };
}

export const obtenerBanners = async ({ querys }: querys) => {
  try {
    const filters = {};

    if (querys.mostrar === 'caducas') {
      filters['mostrar'] = false;
    }

    if (querys.mostrar === 'vigentes') {
      filters['mostrar'] = true;
    }

    const crear = await Banners.findAll({ where: filters });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const crearBanner = async ({ cuerpo }: propsCrearBanners) => {
  try {
    const { imagen } = cuerpo;
    const crear = await Banners.create({
      imagen,
      mostrar: true,
      usuario: 'cabrera'
    });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const editarBanner = async ({ cuerpo, idBanner }: propsEditarBanner) => {
  try {
    const { imagen } = cuerpo;
    const actualizar = await Banners.update(
      { imagen, usuario: 'cabrera' },
      { where: { idbanner: idBanner } }
    );
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const editarVigencia = async ({
  cuerpo,
  idBanner
}: propsEditarBanner) => {
  try {
    const { mostrar } = cuerpo;
    const actualizar = await Banners.update(
      { mostrar },
      { where: { idbanner: idBanner } }
    );
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarBanner = async ({ idBanner }: propsEditarBanner) => {
  try {
    const eliminar = await Banners.destroy({ where: { idbanner: idBanner } });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
