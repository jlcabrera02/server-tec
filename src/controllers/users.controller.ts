import {
  crearUsuario as cu,
  login as lg,
  obtenerPermisos as op,
  obtenerRolesPermisos as orp,
  asociarRolesPermisos as arp,
  crearRol as cr,
  editarRol as er,
  eliminarRol as delr
} from '@services/Users.services';
import { sing } from '@middlewares/auth';

const controller = {
  login: null, //
  crearUsuario: null, //
  obtenerPermisos: null, //
  asignarPermisos: null,
  asociarPermisosRoles: null,
  crearRol: null,
  editarRol: null,
  eliminarRol: null,
  obtenerRoles: null
};

controller.crearUsuario = async (req, res) => {
  try {
    const response = await cu({ ...req.body, rol: 'administrador' });

    const usuario = req.usuario;

    const isAdmin = usuario.permisos.some(
      (permiso: any) => permiso.idpermiso === 1
    );

    if (!isAdmin)
      throw {
        code: 403,
        msg: 'Recurso no autorizado para usuario',
        success: false
      };

    res.status(200).json({ success: true, response });
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
    const { rol } = req.body;
    const response = await cr(rol);

    res.status(200).json({ success: true, response });
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
    const response = await op();

    res.status(200).json({ success: true, response });
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
    const response = await orp();

    res.status(200).json({ success: true, response });
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
    const { rolNuevo, rolAnterior } = req.body;
    const response = await er(rolNuevo, rolAnterior);

    res.status(200).json({ success: true, response });
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
    const { rol } = req.params;
    const response = await delr(rol);

    res.status(200).json({ success: true, response });
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
    const { rol, permisos } = req.body;
    const response = await arp({ permisos, rol });

    res.status(200).json({ success: true, response });
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
    const response = await lg(req.body);
    const token = await sing(response.dataValues);

    res
      .status(200)
      .json({ success: true, response: { token, ...response.dataValues } });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error contraseña o usuario incorrectos'
    });
  }
};

export default controller;
