import sequelize from '@config/db.config';
import models from '@models/index';
import { Op } from 'sequelize';
const { Blogs, Imagenes, Etiquetas, EtiquetasBlogs } = models;

type cuerpo = {
  contenido: string;
  titulo: string;
  fecha: string;
  imagenPrincipal: string;
  fechaVigente: string;
};

type query = {
  estatus: 'aceptado' | 'rechazado' | 'pendiente';
  mostrarSinVigencia: string;
  limit: number;
  offset: number;
  etiqueta: string;
};

export const crearBlog = async ({ cuerpo }: { cuerpo: cuerpo }) => {
  try {
    const crearBlog = await Blogs.create({
      contenido: cuerpo.contenido,
      imagen: cuerpo.imagenPrincipal,
      fechavigente: cuerpo.fechaVigente,
      fecha: cuerpo.fecha,
      titulo: cuerpo.titulo
    });

    return crearBlog;
  } catch (err) {
    throw err;
  }
};

export const obtenerBlogs = async ({ query }: { query: query }) => {
  try {
    const etiquetas = {};
    const filtros = {};

    if (query.estatus) {
      filtros['estatus'] = query.estatus;
    }

    if (query.mostrarSinVigencia !== 'true') {
      filtros['fechavigente'] = {
        [Op.gt]: sequelize.literal('NOW()')
      };
    }

    if (query.etiqueta) {
      etiquetas['etiqueta'] = {
        [Op.substring]: query.etiqueta
      };
    }

    const totalBlogs = await Blogs.count({ where: filtros });

    const obtenerBlogs = await Blogs.findAll({
      where: filtros,
      limit: query.limit ? Number(query.limit) : null,
      offset: query.offset ? Number(query.offset) : null,
      include: [
        {
          model: Etiquetas,
          where: Object.keys(etiquetas).length > 0 ? etiquetas : null
        }
      ],
      order: [['updatedAt', 'DESC']]
    });

    return [obtenerBlogs, totalBlogs];
  } catch (err) {
    throw err;
  }
};

export const obtenerBlogsFiltroEtiquetas = async ({
  query
}: {
  query: query;
}) => {
  try {
    const etiquetas = {};
    const filtros = {};

    if (query.estatus) {
      filtros['estatus'] = query.estatus;
    }

    if (query.mostrarSinVigencia !== 'true') {
      filtros['fechavigente'] = {
        [Op.gt]: sequelize.literal('NOW()')
      };
    }

    if (query.etiqueta) {
      etiquetas['etiqueta'] = {
        [Op.substring]: query.etiqueta
      };
    }

    const totalBlogs = await Etiquetas.count();

    const obtenerBlogs = await Etiquetas.findAll({
      where: etiquetas,
      include: [
        {
          model: Blogs,
          where: filtros
        }
      ],
      order: [['updatedAt', 'DESC']]
    });

    return [obtenerBlogs, totalBlogs];
  } catch (err) {
    throw err;
  }
};

export const obtenerBlog = async ({ idBlog }: { idBlog: number }) => {
  try {
    const obtenerBlog = await Blogs.findByPk(idBlog, {
      include: [{ model: Etiquetas }]
    });
    if (!obtenerBlog) throw { success: false, msg: 'No existe el elemento' };
    return obtenerBlog;
  } catch (err) {
    throw err;
  }
};

export const editarBlogTexto = async ({
  idBlog,
  cuerpo
}: {
  idBlog: number;
  cuerpo: Omit<cuerpo, 'imagenPrincipal' | 'imagenes'>;
}) => {
  try {
    const editarBlogs = await Blogs.update(
      {
        contenido: cuerpo.contenido,
        fechavigente: cuerpo.fechaVigente,
        titulo: cuerpo.titulo,
        fecha: cuerpo.fecha
      },
      { where: { idblog: idBlog } }
    );
    return editarBlogs;
  } catch (err) {
    throw err;
  }
};

export const editarImagenPrincipal = async ({
  idBlog,
  imagen
}: {
  idBlog: number;
  imagen: string;
}) => {
  try {
    const editarBlogs = await Blogs.update(
      {
        imagen: imagen
      },
      { where: { idblog: idBlog } }
    );
    return editarBlogs;
  } catch (err) {
    throw err;
  }
};

export const nuevaImagen = async ({ imagen }: { imagen: string }) => {
  try {
    const editarImagen = await Imagenes.create({
      imagen: imagen
    });
    return editarImagen;
  } catch (err) {
    throw err;
  }
};

export const editarImagenBlogPrincipal = async ({
  idBlog,
  imagen
}: {
  idBlog: number;
  imagen: string;
}) => {
  try {
    const editarImagen = await Blogs.update(
      {
        imagen: imagen
      },
      { where: { idblog: idBlog } }
    );
    return editarImagen;
  } catch (err) {
    throw err;
  }
};

export const editarImagenes = async ({
  idImagen,
  imagen
}: {
  idImagen: number;
  imagen: string;
}) => {
  try {
    const editarImagen = await Imagenes.update(
      {
        imagen: imagen
      },
      { where: { idimagen: idImagen } }
    );
    return editarImagen;
  } catch (err) {
    throw err;
  }
};

export const editarEtiquetas = async ({
  idblog,
  etiquetas
}: {
  idblog: number;
  etiquetas: number[];
}) => {
  try {
    const crear = sequelize.transaction(async (t) => {
      await EtiquetasBlogs.destroy({
        where: { blogIdblog: idblog },
        transaction: t
      });

      const etiquetasCreate = await EtiquetasBlogs.bulkCreate(
        etiquetas.map((idEtiqueta: number) => ({
          blogIdblog: Number(idblog),
          etiquetaIdetiqueta: idEtiqueta
        })),
        { transaction: t }
      );

      return etiquetasCreate;
    });

    return crear;
  } catch (err) {
    throw err;
  }
};

export const eliminarImagenes = async ({ idImagen }: { idImagen: number }) => {
  try {
    const eliminarImagen = await Imagenes.destroy({
      where: { idimagen: idImagen }
    });
    return eliminarImagen;
  } catch (err) {
    throw err;
  }
};

export const eliminarBlog = async ({ idBlog }: { idBlog: number }) => {
  try {
    const eliminarBlog = await Blogs.destroy({
      where: { idblog: idBlog }
    });

    return eliminarBlog;
  } catch (err) {
    throw err;
  }
};

export const modificarEstatusBlog = async ({
  idBlog,
  estatus
}: {
  idBlog: number;
  estatus: string;
}) => {
  try {
    const editarStatus = await Blogs.update(
      {
        estatus
      },
      {
        where: { idblog: idBlog }
      }
    );
    return editarStatus;
  } catch (err) {
    throw err;
  }
};
