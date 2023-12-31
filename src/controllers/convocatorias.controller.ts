import {
  crearConvocatoria,
  obtenerConvocatorias,
  actualizarDatos,
  actualizarPDF,
  actualizarImg,
  eliminarConvocatoria
} from '@services/convocatorias.services';
import models from '@models/index';
import guardarImagen, { guardarArchivos } from 'src/utils/guardarImagen';
import eliminarImagen, { eliminarArchivo } from 'src/utils/eliminarImagen';

const controller = {
  crearConvocatoria: null,
  obtenerConvocatorias: null,
  actualizarConvocatoriasDatos: null,
  actualizarPDF: null,
  actualizarImagen: null,
  eliminarConvocatoria: null
};

controller.crearConvocatoria = async (req, res) => {
  try {
    const { pdf, imagen } = req.files;
    const { titulo, fecha, descripcion } = JSON.parse(req.body.body);

    console.log(req.body);

    const imagenName = await guardarImagen({
      imagen: imagen,
      nomenclatura: 'imagenconvoca'
    });

    const pdfName = await guardarArchivos({
      archivo: pdf,
      nomenclatura: 'pdfconvoca'
    });

    const response = await crearConvocatoria({
      titulo,
      fecha,
      descripcion,
      pdf: `/api/convocatoria/archivos/${pdfName}`,
      imagen: `/api/convocatoria/imagen/${imagenName}`
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
