import models from '@models/index';
const { WhiteMenu, Roles } = models;

type cuerpo = {
  rol: string;
};

export const obtenerRoles = async () => {
  try {
    const crear = await Roles.findAll();
    return crear;
  } catch (err) {
    throw err;
  }
};

export const crearRol = async (cuerpo: cuerpo) => {
  try {
    const crear = await Roles.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};

export const eliminarMenu = async (rol: string) => {
  try {
    const eliminar = await WhiteMenu.destroy({
      where: { rol }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
