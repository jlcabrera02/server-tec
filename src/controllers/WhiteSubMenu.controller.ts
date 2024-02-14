import {
  obtenerSubMenus as OM,
  crearSubMenu as CM,
  editarSubMenu as EM,
  eliminarSubMenu as ELM
} from '@services/WhiteSubMenu.services';

const controller = {
  crear: null,
  obtener: null,
  editar: null,
  eliminar: null
};

controller.crear = async (req, res) => {
  try {
    // const { usuario } = req.usuario;
    const { nombre, url, idMenu } = req.body;

    const response = await CM({ nombre, url, idmenu: idMenu });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo submenu'
    });
  }
};

controller.obtener = async (req, res) => {
  try {
    const response = await OM();
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener submenus'
    });
  }
};

controller.editar = async (req, res) => {
  try {
    const response = await EM(req.body, req.params.idSubMenu);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar submenu'
    });
  }
};

controller.eliminar = async (req, res) => {
  try {
    const response = await ELM(req.params.idSubMenu);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar submenu'
    });
  }
};

export default controller;
