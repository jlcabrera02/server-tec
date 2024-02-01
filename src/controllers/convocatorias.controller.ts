import {
  crearConvocatoria,
  obtenerConvocatorias,
  actualizarDatos,
  actualizarPDF,
  actualizarImg,
  eliminarConvocatoria,
  obtenerConvocatoria
} from '@services/convocatorias.services';
import models from '@models/index';
import guardarImagen, { guardarArchivos } from 'src/utils/guardarImagen';
import eliminarImagen, { eliminarArchivo } from 'src/utils/eliminarImagen';

const controller = {
  crearConvocatoria: null,
  subirArchivo: null,
  obtenerConvocatorias: null,
  obtenerConvocatoria: null,
  actualizarConvocatoriasDatos: null,
  actualizarPDF: null,
  actualizarImagen: null,
  eliminarConvocatoria: null
};

controller.subirArchivo = async (req, res) => {
  try {
    const { file } = req.files;
    const pdfName = await guardarArchivos({
      archivo: file,
      nomenclatura: ''
    });

    res.status(200).json({
      success: true,
      response: `/api/convocatoria/archivos/${pdfName}`
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al subir pdf'
    });
  }
};

controller.crearConvocatoria = async (req, res) => {
  try {
    let rutaArchivoPDF: string = null;
    const { pdf, imagen } = req.files;
    const { titulo, fecha, descripcion, ruta, contenido } = JSON.parse(
      req.body.body
    );

    const moreContent = { ruta: null, contenido: null };

    const imagenName = await guardarImagen({
      imagen: imagen,
      nomenclatura: 'imagenconvoca'
    });

    if (!pdf) {
      const rutas: string = ruta
        ? ruta
        : req.body.titulo.replaceAll(' ', '-').toLowerCase();

      moreContent.ruta = rutas;
      moreContent.contenido = contenido;
    } else {
      const pdfName = await guardarArchivos({
        archivo: pdf,
        nomenclatura: 'pdfconvoca'
      });

      rutaArchivoPDF = `/api/convocatoria/archivos/${pdfName}`;
    }

    const response = await crearConvocatoria({
      titulo,
      fecha,
      descripcion,
      pdf: rutaArchivoPDF,
      imagen: `/api/convocatoria/imagen/${imagenName}`,
      ...moreContent
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    // console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar una nueva convocatoria'
    });
  }
};

controller.obtenerConvocatorias = async (req, res) => {
  try {
    const response = await obtenerConvocatorias(req.query);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener convocatorias'
    });
  }
};

controller.obtenerConvocatoria = async (req, res) => {
  try {
    console.log(req.params);

    const response = await obtenerConvocatoria(req.params.url);
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener convocatoria'
    });
  }
};

controller.actualizarConvocatoriasDatos = async (req, res) => {
  try {
    const imagenAnterior = await models.Convocatorias.findByPk(
      req.params.idconvocatoria
    );
    if (!imagenAnterior)
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };

    const response = await actualizarDatos({
      idconvocatoria: req.params.idconvocatoria,
      ...req.body
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

controller.actualizarPDF = async (req, res) => {
  try {
    const { pdf } = req.files;
    const imagenAnterior = await models.Convocatorias.findByPk(
      req.params.idconvocatoria
    );

    if (!imagenAnterior)
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };

    const nombrePdf = await guardarArchivos({
      archivo: pdf,
      nomenclatura: 'pdfconvoca'
    });

    const response = await actualizarPDF({
      pdf: `/api/convocatoria/archivos/${nombrePdf}`,
      idconvocatoria: req.params.idconvocatoria
    });

    const removePdfPrevius = eliminarArchivo(
      imagenAnterior.dataValues.pdf.replace('/api/convocatoria/archivos/', '')
    );

    res.status(200).json({ success: true, response, removePdfPrevius });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
};

controller.actualizarImagen = async (req, res) => {
  try {
    const { imagen } = req.files;
    const imagenAnterior = await models.Convocatorias.findByPk(
      req.params.idconvocatoria
    );

    if (!imagenAnterior)
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };

    const nombreImg = await guardarImagen({
      imagen: imagen,
      nomenclatura: 'imagenconvoca'
    });

    const response = await actualizarImg({
      imagen: `/api/convocatoria/imagen/${nombreImg}`,
      idconvocatoria: req.params.idconvocatoria
    });

    const removeImgPrevius = await eliminarImagen(
      imagenAnterior.dataValues.imagen.replace('/api/convocatoria/imagen/', '')
    );

    res.status(200).json({ success: true, response, removeImgPrevius });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al actualizar el banner'
    });
  }
};

controller.eliminarConvocatoria = async (req, res) => {
  try {
    const imagenAnterior = await models.Convocatorias.findByPk(
      req.params.idconvocatoria
    );

    if (!imagenAnterior)
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };

    const response = await eliminarConvocatoria(req.params.idconvocatoria);

    const removeImagePrevious = eliminarImagen(
      imagenAnterior.dataValues.imagen.replace('/api/convocatoria/imagen/', '')
    );

    const removePdfPrevious = eliminarArchivo(
      imagenAnterior.dataValues.pdf.replace('/api/convocatoria/archivos/', '')
    );

    res.status(200).json({
      success: true,
      response,
      removeImagePrevious,
      removePdfPrevious
    });
  } catch (err) {
    console.log(err);

    res.status(err.code || 400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar convocatoria'
    });
  }
};

export default controller;
