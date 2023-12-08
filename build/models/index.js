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
var _Accesos = _interopRequireDefault(require("./Accesos.models"));
var _Categorias = _interopRequireDefault(require("./Categorias.model"));
var _Subcategorias = _interopRequireDefault(require("./Subcategorias.model"));
var _Articulos = _interopRequireDefault(require("./Articulos.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_Blogs.default.belongsToMany(_Etiquetas.default, {
  through: _Etiquetas_Blogs.default
});
_Etiquetas.default.belongsToMany(_Blogs.default, {
  through: _Etiquetas_Blogs.default
});
_Blogs.default.hasMany(_Etiquetas_Blogs.default);
_Etiquetas_Blogs.default.belongsTo(_Blogs.default);
_Etiquetas.default.hasMany(_Etiquetas_Blogs.default);
_Etiquetas_Blogs.default.belongsTo(_Etiquetas.default);
_Categorias.default.hasMany(_Subcategorias.default, {
  foreignKey: 'idcategoria'
});
_Users.default.belongsToMany(_Permisos.default, {
  through: _Accesos.default
});
_Permisos.default.belongsToMany(_Users.default, {
  through: _Accesos.default
});
var _default = {
  Banners: _Banners.default,
  Blogs: _Blogs.default,
  Etiquetas: _Etiquetas.default,
  Imagenes: _Imagenes.default,
  EtiquetasBlogs: _Etiquetas_Blogs.default,
  Convocatorias: _Convocatorias.default,
  Users: _Users.default,
  Accesos: _Accesos.default,
  Permisos: _Permisos.default,
  Categorias: _Categorias.default,
  Subcategorias: _Subcategorias.default,
  Articulos: _Articulos.default
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