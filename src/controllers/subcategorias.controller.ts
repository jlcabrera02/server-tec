import {
  crearSubcategorias as csc,
  obtenerSubcategorias as osc,
  editarSubcategoria as esc,
  eliminarSubcategoria as dsc
} from '@services/Subcategorias.services';

const controller = {
  crearSubcategoria: null,
  obtenerSubcategorias: null,
  actualizarSubcategoria: null,
  eliminarSubcategoria: null
};

controller.crearSubcategoria = async (req, res) => {
  try {
    const ruta: string = req.body.subcategoria
      .replaceAll(' ', '-')
      .toLowerCase();

    const response = await csc({ ruta, ...req.body });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar una nueva subcategoría'
    });
  }
};

controller.obtenerSubcategorias = async (req, res) => {
  try {
    const response = await osc(req.query);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener las subcategorias'
    });
  }
};

controller.actualizarSubcategoria = async (req, res) => {
  try {
    const response = await esc(req.body, req.params.idsubcategoria);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar la subcategoria'
    });
  }
};

controller.eliminarSubcategoria = async (req, res) => {
  try {
    const response = await dsc(req.params.idsubcategoria);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar la subcategoria'
    });
  }
};

export default controller;
