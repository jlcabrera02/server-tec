import {
  crearArticulo as ca,
  obtenerArticulo as oa,
  obtenerArticulos as oas,
  eliminarArticulo as da,
  editarArticulo as ea,
  editarEtiquetas as et
} from '@services/Articulos.services';

const controller = {
  crearArticulo: null,
  obtenerArticulo: null,
  obtenerArticulos: null,
  actualizarArticulo: null,
  eliminarArticulo: null,
  editarEtiquetas: null
};

controller.crearArticulo = async (req, res) => {
  try {
    const { usuario } = req.usuario;
    const rutaExists = req.body.ruta;
    const ruta: string = rutaExists
      ? req.body.ruta
      : req.body.titulo.replaceAll(' ', '-').toLowerCase();

    console.log(rutaExists);

    const response = await ca({ ...req.body, ruta, usuario });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo articulo'
    });
  }
};

controller.obtenerArticulos = async (req, res) => {
  try {
    const response = await oas(req.query);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener los articulos'
    });
  }
};

controller.obtenerArticulo = async (req, res) => {
  try {
    const response = await oa({ ruta: req.params.ruta });
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener articulo'
    });
  }
};

controller.actualizarArticulo = async (req, res) => {
  try {
    const response = await ea(req.body, req.params.idarticulo);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar articulo'
    });
  }
};

controller.eliminarArticulo = async (req, res) => {
  try {
    const response = await da(req.params.idarticulo);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar articulo'
    });
  }
};

controller.editarEtiquetas = async (req, res) => {
  try {
    const { idsEtiquetas } = req.body;

    const response = await et({
      idarticulo: req.params.idarticulo,
      etiquetas: idsEtiquetas
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al agregar etiquetas'
    });
  }
};

export default controller;
