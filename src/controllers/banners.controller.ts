import {
  crearBanner,
  obtenerBanners,
  editarBanner,
  eliminarBanner,
  editarVigencia
} from '@services/Banners.services';
import models from '@models/index';
import guardarImagen from 'src/utils/guardarImagen';
import eliminarImagen from 'src/utils/eliminarImagen';

const controller = {
  crearBanner: null,
  obtenerBanners: null,
  actualizarBanner: null,
  eliminarBanner: null,
  vigenciaBanner: null,
  obtenerImagenesBanners: null
};

controller.crearBanner = async (req, res) => {
  try {
    const { usuario } = req.usuario;
    const { imagen } = req.files;

    const nombre = await guardarImagen({ imagen, nomenclatura: 'banner' });

    const response = await crearBanner({
      cuerpo: { imagen: `/api/bannersimagenes/${nombre}`, usuario }
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo banner'
    });
  }
};

controller.obtenerBanners = async (req, res) => {
  try {
    const response = await obtenerBanners({ querys: req.query });
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener los banners'
    });
  }
};

controller.actualizarBanner = async (req, res) => {
  try {
    const { imagen } = req.files;

    const imagenAnterior = await models.Banners.findByPk(req.params.idbanner);
    if (!imagenAnterior)
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };

    const nombre = await guardarImagen({ imagen, nomenclatura: 'banner' });

    const response = await editarBanner({
      cuerpo: { ...req.body, imagen: `/api/bannersimagenes/${nombre}` },
      idBanner: req.params.idbanner
    });

    const removeImagePrevious = eliminarImagen(
      imagenAnterior.dataValues.imagen.replace('/api/bannersimagenes/', '')
    );

    res.status(200).json({ success: true, response, removeImagePrevious });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
};

controller.eliminarBanner = async (req, res) => {
  try {
    const imagenAnterior = await models.Banners.findByPk(req.params.idbanner);

    if (!imagenAnterior)
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };

    const response = await eliminarBanner({
      idBanner: req.params.idbanner
    });

    const removeImagePrevious = eliminarImagen(
      imagenAnterior.dataValues.imagen.replace('/api/bannersimagenes/', '')
    );

    res.status(200).json({ success: true, response, removeImagePrevious });
  } catch (err) {
    res.status(err.code || 400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar el banner'
    });
  }
};

controller.vigenciaBanner = async (req, res) => {
  try {
    const { vigente } = req.body;
    const response = await editarVigencia({
      cuerpo: { mostrar: vigente ? true : false },
      idBanner: req.params.idbanner
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
};

export default controller;
