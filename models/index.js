"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createTables = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _Banners = _interopRequireDefault(require("./Banners.model"));
var _Blogs = _interopRequireDefault(require("./Blogs.model"));
var _Imagenes = _interopRequireDefault(require("./Imagenes.model"));
var _Etiquetas = _interopRequireDefault(require("./Etiquetas.model"));
var _Etiquetas_Blogs = _interopRequireDefault(require("./Etiquetas_Blogs.model"));
var _Convocatorias = _interopRequireDefault(require("./Convocatorias.model"));
var _Users = _interopRequireDefault(require("./Users.model"));
var _Permisos = _interopRequireDefault(require("./Permisos.model"));
var _Roles = _interopRequireWildcard(require("./Roles.models"));
var _Categorias = _interopRequireDefault(require("./Categorias.model"));
var _Subcategorias = _interopRequireDefault(require("./Subcategorias.model"));
var _Articulos = _interopRequireDefault(require("./Articulos.model"));
var _Etiquetas_Articulos = _interopRequireDefault(require("./Etiquetas_Articulos.model"));
var _WhiteMenu = _interopRequireDefault(require("./WhiteMenu"));
var _WhiteSubMenu = _interopRequireDefault(require("./WhiteSubMenu"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Accesos from './Roles.models';

_Blogs.default.belongsToMany(_Etiquetas.default, {
  through: _Etiquetas_Blogs.default
});
_Etiquetas.default.belongsToMany(_Blogs.default, {
  through: _Etiquetas_Blogs.default
});
_Articulos.default.belongsToMany(_Etiquetas.default, {
  through: _Etiquetas_Articulos.default
});
_Etiquetas.default.belongsToMany(_Articulos.default, {
  through: _Etiquetas_Articulos.default
});
_Blogs.default.hasMany(_Etiquetas_Blogs.default);
_Etiquetas_Blogs.default.belongsTo(_Blogs.default);
_Etiquetas.default.hasMany(_Etiquetas_Blogs.default);
_Etiquetas_Blogs.default.belongsTo(_Etiquetas.default);
_Articulos.default.hasMany(_Etiquetas_Articulos.default);
_Etiquetas_Articulos.default.belongsTo(_Articulos.default);
_Etiquetas.default.hasMany(_Etiquetas_Articulos.default);
_Etiquetas_Articulos.default.belongsTo(_Etiquetas.default);
_Categorias.default.hasMany(_Subcategorias.default, {
  foreignKey: 'idcategoria'
});
_Roles.default.belongsToMany(_Permisos.default, {
  through: _Roles.RolesAndPermisos
});
_Permisos.default.belongsToMany(_Roles.default, {
  through: _Roles.RolesAndPermisos
});
_Roles.default.hasMany(_Roles.RolesAndPermisos, {
  as: 'permisos_permitidos'
});
_Roles.RolesAndPermisos.belongsTo(_Roles.default);
_Permisos.default.hasMany(_Roles.RolesAndPermisos);
_Roles.RolesAndPermisos.belongsTo(_Permisos.default);
_WhiteSubMenu.default.belongsTo(_WhiteMenu.default, {
  foreignKey: 'idmenu'
});
_WhiteMenu.default.hasMany(_WhiteSubMenu.default, {
  foreignKey: 'idmenu'
});
_Users.default.belongsTo(_Roles.default, {
  foreignKey: 'rol'
});
var _default = {
  Banners: _Banners.default,
  Blogs: _Blogs.default,
  Etiquetas: _Etiquetas.default,
  Imagenes: _Imagenes.default,
  EtiquetasBlogs: _Etiquetas_Blogs.default,
  Convocatorias: _Convocatorias.default,
  Users: _Users.default,
  // Accesos,
  Permisos: _Permisos.default,
  Categorias: _Categorias.default,
  Subcategorias: _Subcategorias.default,
  Articulos: _Articulos.default,
  EtiquetasArticulos: _Etiquetas_Articulos.default,
  WhiteMenu: _WhiteMenu.default,
  Roles: _Roles.default,
  RolesAndPermisos: _Roles.RolesAndPermisos,
  WhiteSubMenu: _WhiteSubMenu.default
};
exports.default = _default;
const createTables = () => {
  _db.default.sync({
    force: true
  })
  // .drop({})
  .then(() => console.log('Se crearon las tablas correctamente')).catch(err => console.log(err)).finally(() => process.exit());
};
exports.createTables = createTables;