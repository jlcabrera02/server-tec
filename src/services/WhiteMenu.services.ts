import models from '@models/index';
const { WhiteMenu, WhiteSubMenu } = models;

type cuerpo = {
  nombre: string;
  url: string;
};

export const obtenerMenus = async () => {
  try {
    const crear = await WhiteMenu.findAll({ include: WhiteSubMenu });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const crearMenu = async (cuerpo: cuerpo) => {
  try {
    const crear = await WhiteMenu.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};

export const editarMenu = async (cuerpo: cuerpo, idMenu: number) => {
  try {
    const actualizar = await WhiteMenu.update(cuerpo, {
      where: { idmenu: idMenu }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarMenu = async (idMenu: number) => {
  try {
    const eliminar = await WhiteMenu.destroy({
      where: { idmenu: idMenu }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
