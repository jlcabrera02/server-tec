import models from '@models/index';
import {
  crearBlog,
  obtenerBlog,
  obtenerBlogs,
  editarBlogTexto,
  editarImagenes,
  eliminarImagenes,
  eliminarBlog,
  nuevaImagen,
  editarImagenBlogPrincipal,
  modificarEstatusBlog
} from '@services/Blogs.services';
import subirImagen, { eliminarImagen } from 'src/utils/subirImagen';
const controller = {
  crearBlog: null, //
  obtenerBlog: null, //
  obtenerBlogs: null, //
  editarBlogTexto: null, //
  eliminarBlog: null, //
  nuevaImagen: null, //
  editarImagenes: null, //
  eliminarImagen: null, //
  editarImagenPrincipal: null, //
  modificarEstatus: null //
};

controller.crearBlog = async (req, res) => {
  try {
    const imagenesBase64: string[] = req.body.imagenes;
    const imagenesUrl = [];

    imagenesBase64.map((imagenBase64) => {
      const info = subirImagen({ imagenBase64, nomenclatura: 'blogs' });
      imagenesUrl.push(`/api/blogsimagenes/${info.getNombre()}`);
    });

    const infoImagenPrincipal = subirImagen({
      imagenBase64: req.body.imagenPrincipal,
      nomenclatura: 'blogsmainimagen'
    });

    const imagenPrincipal = `/api/blogsimagenes/${infoImagenPrincipal.getNombre()}`;

    const response = await crearBlog({
      cuerpo: {
        contenido: req.body.content,
        imagenPrincipal,
        imagenes: imagenesUrl,
        fechaVigente: req.body.fechaVigente
      }
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo blogs'
    });
  }
};

controller.obtenerBlog = async (req, res) => {
  try {
    const response = await obtenerBlog({ idBlog: req.params.idblog });
    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar un nuevo blogs'
    });
  }
};

controller.obtenerBlogs = async (req, res) => {
  try {
    const response = await obtenerBlogs({ query: req.query });
    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener los blogs'
    });
  }
};

controller.editarBlogTexto = async (req, res) => {
  try {
    const response = await editarBlogTexto({
      idBlog: req.params.idblog,
      cuerpo: req.body
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error editar el contenido del blog'
    });
  }
};

controller.nuevaImagen = async (req, res) => {
  try {
    const ruta = subirImagen({
      imagenBase64: req.body.imagen,
      nomenclatura: 'blogs'
    });

    const response = await nuevaImagen({
      idBlog: req.params.idblog,
      imagen: `/api/blogsimagenes/${ruta.getNombre()}`
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error editar la imagen'
    });
  }
};

controller.editarImagenPrincipal = async (req, res) => {
  try {
    const imagenAnterior = await models.Blogs.findByPk(req.params.idblog);

    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }

    eliminarImagen({
      pathImagen: imagenAnterior.dataValues.imagen,
      nomenclatura: 'blogsimagenes'
    });

    const ruta = subirImagen({
      imagenBase64: req.body.imagen,
      nomenclatura: 'blogsmainimagen'
    });

    const response = await editarImagenBlogPrincipal({
      idBlog: req.params.idblog,
      imagen: `/api/blogsimagenes/${ruta.getNombre()}`
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error editar la imagen'
    });
  }
};

controller.editarImagenes = async (req, res) => {
  try {
    const imagenAnterior = await models.Imagenes.findByPk(req.params.idimagen);

    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }

    eliminarImagen({
      pathImagen: imagenAnterior.dataValues.imagen,
      nomenclatura: 'blogsimagenes'
    });

    const ruta = subirImagen({
      imagenBase64: req.body.imagen,
      nomenclatura: 'blogs'
    });

    const response = await editarImagenes({
      idImagen: req.params.idimagen,
      imagen: `/api/blogsimagenes/${ruta.getNombre()}`
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error editar la imagen'
    });
  }
};

controller.eliminarImagen = async (req, res) => {
  try {
    const imagenAnterior = await models.Imagenes.findByPk(req.params.idimagen);

    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }

    eliminarImagen({
      pathImagen: imagenAnterior.dataValues.imagen,
      nomenclatura: 'blogsimagenes'
    });

    const response = await eliminarImagenes({ idImagen: req.params.idimagen });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar la imagen'
    });
  }
};

controller.eliminarBlog = async (req, res) => {
  try {
    const imagenAnterior = await models.Blogs.findByPk(req.params.idblog);

    const imagenesAnteriores = await models.Imagenes.findAll({
      where: { idblog: req.params.idblog }
    });

    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }
    imagenesAnteriores.forEach((el) => {
      eliminarImagen({
        pathImagen: el.dataValues.imagen,
        nomenclatura: 'blogsimagenes'
      });
    });

    eliminarImagen({
      pathImagen: imagenAnterior.dataValues.imagen,
      nomenclatura: 'blogsimagenes'
    });

    const response = await eliminarBlog({ idBlog: req.params.idblog });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al eliminar el blog'
    });
  }
};

controller.modificarEstatus = async (req, res) => {
  try {
    const response = await modificarEstatusBlog({
      estatus: req.body.estatus,
      idBlog: req.params.idblog
    });

    res.status(200).json({ success: true, response });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al modificar el estatus al blog'
    });
  }
};

export default controller;
