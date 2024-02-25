"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearPermisos = void 0;
var _Permisos = _interopRequireDefault(require("../models/Permisos.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const crearPermisos = async () => {
  try {
    await _Permisos.default.bulkCreate([{
      idpermiso: 1,
      permiso: 'Crear usuarios',
      descripcion: 'El usuario puede crear otros usuario y tiene la capacidad de generar roles y permisos'
    }, {
      idpermiso: 2,
      permiso: 'Crear Articulos',
      descripcion: 'El usuario tendra la capacidad de crear articulos'
    }, {
      idpermiso: 3,
      permiso: 'Editar articulos',
      descripcion: 'El usuario tendra la capacidad de editar articulos'
    }, {
      idpermiso: 4,
      permiso: 'Eliminar Articulos',
      descripcion: 'El usuario tendra la capacidad de eliminar articulos'
    }, {
      idpermiso: 5,
      permiso: 'Crear banners',
      descripcion: 'El usuario tendra la capacidad de crear banners'
    }, {
      idpermiso: 6,
      permiso: 'Editar Banners',
      descripcion: 'El usuario tendra la capacidad de editar banners'
    }, {
      idpermiso: 7,
      permiso: 'Eliminar Banners',
      descripcion: 'El usuario tendra la capacidad de eliminar banners'
    }, {
      idpermiso: 8,
      permiso: 'Crear Blogs',
      descripcion: 'El usuario tendra la capacidad de crear noticias'
    }, {
      idpermiso: 9,
      permiso: 'Publicar blogs',
      descripcion: 'El usuario tendra la capacidad de publicar blogs'
    }, {
      idpermiso: 10,
      permiso: 'Editar blogs',
      descripcion: 'El usuario tendra la capacidad de editar blogs.'
    }, {
      idpermiso: 11,
      permiso: 'Eliminar blogs',
      descripcion: 'El usuario tendra la capacidad de eliminar blogs.'
    }, {
      idpermiso: 13,
      permiso: 'Crear convocatorias',
      descripcion: 'El usuario tendra la capacidad de crear convocatorias.'
    }, {
      idpermiso: 14,
      permiso: 'Editar convocatorias',
      descripcion: 'El usuario tendra la capacidad de editar las convocatorias y añadir links.'
    }, {
      idpermiso: 15,
      permiso: 'Eliminar  convocatorias',
      descripcion: 'El usuario tendra la capacidad de eliminar convocatorias.'
    }, {
      idpermiso: 16,
      permiso: 'Administrar etiquetas',
      descripcion: 'El usuario tendra la capacidad de poder manipular etiquetas.'
    }, {
      idpermiso: 17,
      permiso: 'Administrar menu azul',
      descripcion: 'El usuario tendra la capacidad de poder manipular el menu con fondo de color azul.'
    }, {
      idpermiso: 18,
      permiso: 'Administrar menu blanco',
      descripcion: 'El usuario tendra la capacidad de poder manipular el menu con fondo de color bllanco ubicado en la parte superior de la página.'
    }]);
    console.log('Permisos creados correctamente');
  } catch (err) {
    console.log('Error al crear permisos, verifica si tienes creada la tabla en tu base de datos o si ya tienes los datos existentes');
  }
  process.exit();
};
exports.crearPermisos = crearPermisos;