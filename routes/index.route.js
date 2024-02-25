"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _banners = _interopRequireDefault(require("./banners.route"));
var _blogs = _interopRequireDefault(require("./blogs.route"));
var _etiquetas = _interopRequireDefault(require("./etiquetas.route"));
var _convocatoria = _interopRequireDefault(require("./convocatoria.route"));
var _categoria = _interopRequireDefault(require("./categoria.route"));
var _subcategoria = _interopRequireDefault(require("./subcategoria.route"));
var _articulos = _interopRequireDefault(require("./articulos.route"));
var _users = _interopRequireDefault(require("./users.route"));
var _menuBlanco = _interopRequireDefault(require("./menuBlanco.route"));
var _obtenerImagenes = _interopRequireWildcard(require("../utils/obtenerImagenes"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.use('/banners', _banners.default);
router.use('/blogs', _blogs.default);
router.use('/etiquetas', _etiquetas.default);
router.use('/convocatorias', _convocatoria.default);
router.use('/auth', _users.default);
router.use('/categorias', _categoria.default);
router.use('/subcategorias', _subcategoria.default);
router.use('/articulos', _articulos.default);
router.use('/menu-blanco', _menuBlanco.default);

//Get Images
router.get('/bannersimagenes/:imagen', _obtenerImagenes.default);
router.get('/blogsimagenes/:imagen', _obtenerImagenes.default);
router.get('/convocatoria/imagen/:imagen', _obtenerImagenes.default);

//Get archivos
router.get('/convocatoria/archivos/:archivo', _obtenerImagenes.obtenerArchivos);
var _default = router;
exports.default = _default;