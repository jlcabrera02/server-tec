import sequelize from '@config/db.config';
import models from '@models/index';
import { Op } from 'sequelize';
const { Blogs, Imagenes } = models;

type cuerpo = {
  contenido: string;
  imagenPrincipal: string;
  imagenes: string[];
  fechaVigente: string;
};

type query = {
  estatus: 'aceptado' | 'rechazado' | 'pendiente';
  mostrarSinVigencia: string;
  limit: number;
};

export const crearBlog = async ({ cuerpo }: { cuerpo: cuerpo }) => {
  try {
    const transition = sequelize.transaction(async (t) => {
      const crearBlog = await Blogs.create(
        {
          content: cuerpo.contenido,
          imagen: cuerpo.imagenPrincipal,
          fechavigente: cuerpo.fechaVigente
        },
        { transaction: t }
      );

      const crearImagenes = await Imagenes.bulkCreate(
        cuerpo.imagenes.map((imagen) => ({
          imagen,
          idblog: crearBlog.dataValues.idblog
        })),
        { transaction: t }
      );

      return { crearBlog, crearImagenes };
    });
    return transition;
  } catch (err) {
    throw err;
  }
};

export const obtenerBlogs = async ({ query }: { query: query }) => {
  try {
    const filtros = {};

    if (query.estatus) {
      filtros['estatus'] = query.estatus;
    }

    if (query.mostrarSinVigencia !== 'true') {
      filtros['fechavigente'] = {
        [Op.gt]: sequelize.literal('NOW()')
      };
    }

    const obtenerBlogs = await Blogs.findAll({
      where: filtros,
      limit: query.limit ? Number(query.limit) : null,
      order: [['updatedAt', 'DESC']]
    });

    return obtenerBlogs;
  } catch (err) {
    throw err;
  }
};

export const obtenerBlog = async ({ idBlog }: { idBlog: number }) => {
  try {
    const obtenerBlog = await Blogs.findByPk(idBlog, { include: Imagenes });
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
  cuerpo: Omit<cuerpo, 'imagenPrincipal' | 'imagenes' | 'contenido'> & {
    content: string;
  };
}) => {
  try {
    const editarBlogs = await Blogs.update(
      {
        content: cuerpo.content,
        fechavigente: cuerpo.fechaVigente
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

export const nuevaImagen = async ({
  imagen,
  idBlog
}: {
  imagen: string;
  idBlog: number;
}) => {
  try {
    const editarImagen = await Imagenes.create({
      imagen: imagen,
      idblog: idBlog
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
