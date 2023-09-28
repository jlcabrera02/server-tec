import fs from 'fs';
import path from 'path';
import {
  crearBanner,
  obtenerBanners,
  editarBanner,
  eliminarBanner,
  editarVigencia
} from '@services/Banners.services';
import generadornombre from 'src/utils/generadornombre';
import models from '@models/index';

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
    const imagenBase64 = req.body.imagen;
    const buffer = Buffer.from(
      imagenBase64.replace(/data:image\/\w*;base64/, ''),
      'base64'
    );
    const extencionArchivo = imagenBase64.substring(
      'data:image/'.length,
      imagenBase64.indexOf(';base64')
    );

    const nombre = 'banner' + generadornombre() + '.' + extencionArchivo;

    fs.writeFileSync(
      path.join(__dirname, '../public/media/imagenes/', nombre),
      buffer
    );

    const response = await crearBanner({
      cuerpo: { imagen: `/api/bannersimagenes/${nombre}` }
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
    const imagenAnterior = await models.Banners.findByPk(req.params.idbanner);
    if (!imagenAnterior)
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };

    const imagenBase64 = req.body.imagen;
    const buffer = Buffer.from(
      imagenBase64.replace(/data:image\/\w*;base64/, ''),
      'base64'
    );
    const extencionArchivo = imagenBase64.substring(
      'data:image/'.length,
      imagenBase64.indexOf(';base64')
    );

    const nombre = 'banner' + generadornombre() + '.' + extencionArchivo;

    fs.writeFileSync(
      path.join(__dirname, '../public/media/imagenes/', nombre),
      buffer
    );

    const response = await editarBanner({
      cuerpo: { ...req.body, imagen: `/api/bannersimagenesnombre/${nombre}` },
      idBanner: req.params.idbanner
    });

    fs.unlinkSync(
      path.join(
        __dirname,
        '../public/media/imagenes',
        imagenAnterior.dataValues.imagen.replace('/api/bannersimagenes/', '')
      )
    );
    res.status(200).json({ success: true, response });
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

    fs.unlinkSync(
      path.join(
        __dirname,
        '../public/media/imagenes',
        imagenAnterior.dataValues.imagen.replace('/api/bannersimagenes/', '')
      )
    );

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
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

controller.obtenerImagenesBanners = (req, res) => {
  const nombreImagen = req.params.imagen;

  const rutaImagen = path.join(
    __dirname,
    '../public/media/imagenes/',
    nombreImagen
  );

  // Utiliza fs para leer la imagen del volumen y enviarla como respuesta
  fs.readFile(rutaImagen, (err, data) => {
    if (err) {
      res.status(404).send('Imagen no encontrada');
    } else {
      // Establece el encabezado Content-Type adecuado (p. ej., image/jpeg)
      res.contentType(`image/${nombreImagen.split('.')[1]}`);
      res.send(data);
    }
  });
};

export default controller;
