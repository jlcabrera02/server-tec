"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Users = require("../services/Users.services");
var _auth = require("../middlewares/auth");
const controller = {
  login: null,
  //
  crearUsuario: null,
  //
  obtenerPermisos: null,
  //
  asignarPermisos: null,
  asociarPermisosRoles: null,
  crearRol: null,
  editarRol: null,
  eliminarRol: null,
  obtenerUsuarios: null,
  cambiarRolUsuario: null,
  obtenerRoles: null
};
controller.crearUsuario = async (req, res) => {
  try {
    const permisos = req.permisos;
    const isAdmin = permisos.some(el => el === 1);
    if (!isAdmin) throw {
      code: 403,
      msg: 'Recurso no autorizado para usuario',
      success: false
    };
    const response = await (0, _Users.crearUsuario)({
      ...req.body
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al crear usuario'
    });
  }
};
controller.crearRol = async (req, res) => {
  try {
    const {
      rol
    } = req.body;
    const response = await (0, _Users.crearRol)(rol);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al crear rol'
    });
  }
};
controller.obtenerPermisos = async (req, res) => {
  try {
    const response = await (0, _Users.obtenerPermisos)();
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener permisos'
    });
  }
};
controller.obtenerRoles = async (req, res) => {
  try {
    const response = await (0, _Users.obtenerRolesPermisos)();
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener roles'
    });
  }
};
controller.editarRol = async (req, res) => {
  try {
    const {
      rolNuevo,
      rolAnterior
    } = req.body;
    const response = await (0, _Users.editarRol)(rolNuevo, rolAnterior);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener roles'
    });
  }
};
controller.eliminarRol = async (req, res) => {
  try {
    const {
      rol
    } = req.params;
    const response = await (0, _Users.eliminarRol)(rol);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener roles'
    });
  }
};
controller.asociarPermisosRoles = async (req, res) => {
  try {
    const isAdmin = req.permisos.some(el => el === 1);
    if (!isAdmin) throw {
      code: 403,
      msg: 'Recurso no autorizado para usuario',
      success: false
    };
    const {
      rol,
      permisos
    } = req.body;
    const response = await (0, _Users.asociarRolesPermisos)({
      permisos,
      rol
    });
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener permisos'
    });
  }
};
controller.login = async (req, res) => {
  try {
    const response = await (0, _Users.login)(req.body);
    const token = await (0, _auth.sing)(response.login.dataValues);
    res.status(200).json({
      success: true,
      response: {
        token,
        ...response.login.dataValues,
        permisos: response.permisos
      }
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error contraseña o usuario incorrectos'
    });
  }
};
controller.obtenerUsuarios = async (req, res) => {
  try {
    const permisos = req.permisos;
    const isAdmin = permisos.some(el => el === 1);
    if (!isAdmin) throw {
      code: 403,
      msg: 'Recurso no autorizado para usuario',
      success: false
    };
    const response = await (0, _Users.obtenerUsuarios)();
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener usuarios'
    });
  }
};
controller.cambiarRolUsuario = async (req, res) => {
  try {
    const permisos = req.permisos;
    const isAdmin = permisos.some(el => el === 1);
    if (!isAdmin) throw {
      code: 403,
      msg: 'Recurso no autorizado para usuario',
      success: false
    };
    const {
      rol,
      usuario
    } = req.body;
    const response = await (0, _Users.cambiarRolUsuarios)(rol, usuario);
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al editar rol'
    });
  }
};
var _default = controller;
exports.default = _default;