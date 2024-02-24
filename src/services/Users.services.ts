import sequelize from '@config/db.config';
import models from '@models/index';
const { Users, Permisos, Roles, RolesAndPermisos }: any = models;

type cuerpoLogin = {
  usuario: string;
  password: boolean;
};

type cuerpo = {
  nombres: string;
  apepat: string;
  apemat: string;
  rol: string;
} & cuerpoLogin;

type permisos = {
  rol: string;
  permisos: any[];
};

export const login = async (body: cuerpoLogin) => {
  try {
    const filters = {
      usuario: body.usuario
    };

    const login = await Users.findOne({
      where: filters
    });

    const permisos = await RolesAndPermisos.findAll({
      include: [{ model: Permisos }],
      where: { roleRol: login.dataValues.rol }
    });

    const authenticate = await login.authenticate(body.password);
    if (!authenticate) throw { msg: 'Error contraseña incorrecta' };

    delete login.dataValues.password;

    return { login, permisos };
  } catch (err) {
    throw err;
  }
};

export const crearUsuario = async (cuerpo: cuerpo) => {
  try {
    const { nombres, apepat, apemat, password, usuario, rol } = cuerpo;
    const crear = await Users.create({
      nombres,
      apemat,
      usuario,
      apepat,
      rol,
      password
    });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const obtenerPermisos = async () => {
  try {
    const permisos = await Permisos.findAll();
    return permisos;
  } catch (err) {
    throw err;
  }
};

export const obtenerRoles = async () => {
  try {
    const roles = await Roles.findAll();
    return roles;
  } catch (err) {
    throw err;
  }
};

export const obtenerRolesPermisos = async () => {
  try {
    const roles = await Roles.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          attributes: {
            exclude: ['createdAt', 'updatedAt, "permisoIdpermiso']
          },
          model: RolesAndPermisos,
          as: 'permisos_permitidos',
          include: [{ model: Permisos, attributes: ['idpermiso', 'permiso'] }]
        }
      ]
    });
    return roles;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const crearRol = async (rol: Omit<cuerpo, 'permisos'>) => {
  try {
    const crear = await Roles.create({ rol });
    return crear;
  } catch (err) {
    throw err;
  }
};

export const editarRol = async (
  rolNuevo: Omit<cuerpo, 'permisos'>,
  rolAnterior: Omit<cuerpo, 'permisos'>
) => {
  try {
    const editar = await Roles.update(
      { rol: rolNuevo },
      { where: { rol: rolAnterior } }
    );
    return editar;
  } catch (err) {
    throw err;
  }
};

export const eliminarRol = async (rol: Omit<cuerpo, 'permisos'>) => {
  try {
    const eliminar = await Roles.destroy({ where: { rol } });
    return eliminar;
  } catch (err) {
    throw err;
  }
};

export const asociarRolesPermisos = async ({ permisos, rol }: permisos) => {
  try {
    const cuerpo = permisos.map((el: any) => ({
      roleRol: rol,
      permisoIdpermiso: el.idPermiso
    }));

    const res = sequelize.transaction(async (t) => {
      const eliminarCaracteristicasAnteriores = await RolesAndPermisos.destroy({
        where: { roleRol: rol }
      });
      const roles = await RolesAndPermisos.bulkCreate(cuerpo, {
        transaction: t
      });
      return roles;
    });

    return res;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const obtenerUsuarios = async () => {
  try {
    const response = await Users.findAll({
      attributes: { exclude: ['password'] }
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const cambiarRolUsuarios = async (rol: string, usuario: string) => {
  try {
    const response = await Users.update({ rol }, { where: { usuario } });
    return response;
  } catch (err) {
    throw err;
  }
};
