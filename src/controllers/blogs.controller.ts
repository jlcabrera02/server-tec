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
  modificarEstatusBlog,
  editarEtiquetas
} from '@services/Blogs.services';
import guardarImagen from '@utils/guardarImagen';
import eliminarImg from '@utils/eliminarImagen';
const controller = {
  crearBlog: null, //
  obtenerBlog: null, //
  obtenerBlogs: null, //
  editarBlogTexto: null, //
  eliminarBlog: null, //
  modificarEstatus: null, //
  //Editar las imagenes de los blogs
  nuevaImagen: null, //
  editarImagenes: null, //
  editarEtiquetas: null, //
  eliminarImagen: null, //
  editarImagenPrincipal: null //
};

controller.crearBlog = async (req, res) => {
  try {
    const { imagenPrincipal } = req.files;
    const { contenido, titulo, fechaVigente, fecha } = JSON.parse(
      req.body.contenido
    );

    const imagenP = await guardarImagen({
      imagen: imagenPrincipal,
      nomenclatura: 'blogs'
    });

    const response = await crearBlog({
      cuerpo: {
        contenido,
        imagenPrincipal: `/api/blogsimagenes/${imagenP}`,
        fechaVigente,
        fecha,
        titulo
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
    const { imagen } = req.files;

    const nombre = await guardarImagen({ imagen, nomenclatura: 'blogs' });

    const response = await nuevaImagen({
      imagen: `/api/blogsimagenes/${nombre}`
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
    const { imagen } = req.files;
    const imagenAnterior = await models.Blogs.findByPk(req.params.idblog);

    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }

    const nombreImg = await guardarImagen({
      imagen,
      nomenclatura: 'blogs'
    });

    const removeImg = eliminarImg(
      imagenAnterior.dataValues.imagen.replace('/api/blogsimagenes/', '')
    );

    const response = await editarImagenBlogPrincipal({
      idBlog: req.params.idblog,
      imagen: `/api/blogsimagenes/${nombreImg}`
    });

    res
      .status(200)
      .json({ success: true, response, removeImagePrevious: removeImg });
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
    const { imagen } = req.files;
    const imagenAnterior = await models.Imagenes.findByPk(req.params.idimagen);

    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }

    const nombreImg = await guardarImagen({
      imagen,
      nomenclatura: 'blogs'
    });

    const removeImg = eliminarImg(
      imagenAnterior.dataValues.imagen.replace('/api/blogsimagenes/', '')
    );

    const response = await editarImagenes({
      idImagen: req.params.idimagen,
      imagen: `/api/blogsimagenes/${nombreImg}`
    });

    res
      .status(200)
      .json({ success: true, response, removeImagePrevious: removeImg });
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

    const removeImg = eliminarImg(
      imagenAnterior.dataValues.imagen.replace('/api/blogsimagenes/', '')
    );

    const response = await eliminarImagenes({
      idImagen: Number(req.params.idimagen)
    });

    res.status(200).json({ success: true, response, removeImg });
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

    if (!imagenAnterior) {
      throw {
        success: false,
        response: null,
        msg: 'No se encontro el elemento en la base de datos.'
      };
    }

    const removeImg = eliminarImg(
      imagenAnterior.dataValues.imagen.replace('/api/blogsimagenes/', '')
    );

    const response = await eliminarBlog({ idBlog: req.params.idblog });

    res.status(200).json({ success: true, response, removeImg });
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

controller.editarEtiquetas = async (req, res) => {
  try {
    const { idsEtiquetas } = req.body;

    const response = await editarEtiquetas({
      idblog: req.params.idblog,
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
