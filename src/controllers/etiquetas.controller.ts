import {
  crearEtiqueta,
  editarEtiqueta,
  eliminarEtiqueta,
  obtenerEtiquetas
} from '@services/Etiquetas.services';

const controller = {
  obtenerEtiquetas: null, //
  crearEtiqueta: null, //
  actualizarEtiqueta: null, //
  eliminarEtiqueta: null //
};

controller.obtenerEtiquetas = async (req, res) => {
  try {
    const response = await obtenerEtiquetas();

    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener etiquetas'
    });
  }
};

controller.crearEtiqueta = async (req, res) => {
  try {
    const { etiqueta } = req.body;

    const response = await crearEtiqueta({ etiqueta });

    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar una nueva etiqueta'
    });
  }
};

controller.actualizarEtiqueta = async (req, res) => {
  try {
    const { etiqueta } = req.body;
    const { idetiqueta } = req.params;
    const response = await editarEtiqueta({ etiqueta, idEtiqueta: idetiqueta });
    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar etiqueta'
    });
  }
};

controller.eliminarEtiqueta = async (req, res) => {
  try {
    const { idetiqueta } = req.params;
    const response = await eliminarEtiqueta({ idEtiqueta: idetiqueta });
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar etiqueta'
    });
  }
};

export default controller;
