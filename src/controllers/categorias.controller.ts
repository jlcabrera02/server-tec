import {
  crearCategorias as cc,
  obtenerCategorias as oc,
  editarCategoria as ec,
  eliminarCategoria as dc
} from '@services/Categorias.services';

const controller = {
  crearCategoria: null,
  obtenerCategorias: null,
  actualizarCategoria: null,
  eliminarCategoria: null
};

controller.crearCategoria = async (req, res) => {
  try {
    const response = await cc(req.body);

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar una nueva categoría'
    });
  }
};

controller.obtenerCategorias = async (req, res) => {
  try {
    const response = await oc(req.query);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener las categorias'
    });
  }
};

controller.actualizarCategoria = async (req, res) => {
  try {
    const response = await ec(req.body, req.params.idcategoria);
    res.status(200).json({ success: true, response });
    console.log('err');
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar la categoria'
    });
  }
};

controller.eliminarCategoria = async (req, res) => {
  try {
    const response = await dc(req.params.idcategoria);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar la categoria'
    });
  }
};

export default controller;
