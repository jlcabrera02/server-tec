import models from '@models/index';
const { WhiteSubMenu } = models;

type cuerpo = {
  nombre: string;
  url: string;
  idmenu: number;
};

export const obtenerSubMenus = async () => {
  try {
    const crear = await WhiteSubMenu.findAll();
    return crear;
  } catch (err) {
    throw err;
  }
};

export const crearSubMenu = async (cuerpo: cuerpo) => {
  try {
    const crear = await WhiteSubMenu.create(cuerpo);
    return crear;
  } catch (err) {
    throw err;
  }
};

export const editarSubMenu = async (cuerpo: cuerpo, idSubMenu: number) => {
  try {
    const actualizar = await WhiteSubMenu.update(cuerpo, {
      where: { idsubmenu: idSubMenu }
    });
    return actualizar;
  } catch (err) {
    throw err;
  }
};

export const eliminarSubMenu = async (idSubMenu: number) => {
  try {
    const eliminar = await WhiteSubMenu.destroy({
      where: { idsubmenu: idSubMenu }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
