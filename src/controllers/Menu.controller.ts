import {
  obtenerMenus as OM,
  crearMenu as CM,
  editarMenu as EM,
  eliminarMenu as ELM
} from '@services/WhiteMenu.services';

const controller = {
  crear: null,
  obtener: null,
  editar: null,
  eliminar: null
};

controller.crear = async (req, res) => {
  try {
    // const { usuario } = req.usuario;
    const { nombre, url } = req.body;

    const response = await CM({ nombre, url });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo menu'
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
      msg: 'Error al obtener menus'
    });
  }
};

controller.editar = async (req, res) => {
  try {
    const response = await EM(req.body, req.params.idMenu);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar menu'
    });
  }
};

controller.eliminar = async (req, res) => {
  try {
    const response = await ELM(req.params.idMenu);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar menu'
    });
  }
};

export default controller;
