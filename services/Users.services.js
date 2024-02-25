"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerUsuarios = exports.obtenerRolesPermisos = exports.obtenerRoles = exports.obtenerPermisos = exports.login = exports.eliminarRol = exports.editarRol = exports.crearUsuario = exports.crearRol = exports.cambiarRolUsuarios = exports.asociarRolesPermisos = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Users,
  Permisos,
  Roles,
  RolesAndPermisos
} = _models.default;
const login = async body => {
  try {
    const filters = {
      usuario: body.usuario
    };
    const login = await Users.findOne({
      where: filters
    });
    const permisos = await RolesAndPermisos.findAll({
      include: [{
        model: Permisos
      }],
      where: {
        roleRol: login.dataValues.rol
      }
    });
    const authenticate = await login.authenticate(body.password);
    if (!authenticate) throw {
      msg: 'Error contraseña incorrecta'
    };
    delete login.dataValues.password;
    return {
      login,
      permisos
    };
  } catch (err) {
    throw err;
  }
};
exports.login = login;
const crearUsuario = async cuerpo => {
  try {
    const {
      nombres,
      apepat,
      apemat,
      password,
      usuario,
      rol
    } = cuerpo;
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
exports.crearUsuario = crearUsuario;
const obtenerPermisos = async () => {
  try {
    const permisos = await Permisos.findAll();
    return permisos;
  } catch (err) {
    throw err;
  }
};
exports.obtenerPermisos = obtenerPermisos;
const obtenerRoles = async () => {
  try {
    const roles = await Roles.findAll();
    return roles;
  } catch (err) {
    throw err;
  }
};
exports.obtenerRoles = obtenerRoles;
const obtenerRolesPermisos = async () => {
  try {
    const roles = await Roles.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: [{
        attributes: {
          exclude: ['createdAt', 'updatedAt, "permisoIdpermiso']
        },
        model: RolesAndPermisos,
        as: 'permisos_permitidos',
        include: [{
          model: Permisos,
          attributes: ['idpermiso', 'permiso']
        }]
      }]
    });
    return roles;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
exports.obtenerRolesPermisos = obtenerRolesPermisos;
const crearRol = async rol => {
  try {
    const crear = await Roles.create({
      rol
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
exports.crearRol = crearRol;
const editarRol = async (rolNuevo, rolAnterior) => {
  try {
    const editar = await Roles.update({
      rol: rolNuevo
    }, {
      where: {
        rol: rolAnterior
      }
    });
    return editar;
  } catch (err) {
    throw err;
  }
};
exports.editarRol = editarRol;
const eliminarRol = async rol => {
  try {
    const eliminar = await Roles.destroy({
      where: {
        rol
      }
    });
    return eliminar;
  } catch (err) {
    throw err;
  }
};
exports.eliminarRol = eliminarRol;
const asociarRolesPermisos = async ({
  permisos,
  rol
}) => {
  try {
    const cuerpo = permisos.map(el => ({
      roleRol: rol,
      permisoIdpermiso: el.idPermiso
    }));
    const res = _db.default.transaction(async t => {
      const eliminarCaracteristicasAnteriores = await RolesAndPermisos.destroy({
        where: {
          roleRol: rol
        }
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
exports.asociarRolesPermisos = asociarRolesPermisos;
const obtenerUsuarios = async () => {
  try {
    const response = await Users.findAll({
      attributes: {
        exclude: ['password']
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};
exports.obtenerUsuarios = obtenerUsuarios;
const cambiarRolUsuarios = async (rol, usuario) => {
  try {
    const response = await Users.update({
      rol
    }, {
      where: {
        usuario
      }
    });
    return response;
  } catch (err) {
    throw err;
  }
};
exports.cambiarRolUsuarios = cambiarRolUsuarios;