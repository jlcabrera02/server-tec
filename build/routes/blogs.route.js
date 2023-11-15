"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _blogs = _interopRequireDefault(require("../controllers/blogs.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtenerxidblog/:idblog', _blogs.default.obtenerBlog);
router.get('/obtener', _blogs.default.obtenerBlogs);
router.post('/crear', _blogs.default.crearBlog);
router.post('/nuevaimagen', _blogs.default.nuevaImagen);
router.put('/cambiarestatusxidblog/:idblog', _blogs.default.modificarEstatus);
router.put('/editarimagenxidimagen/:idimagen', _blogs.default.editarImagenes);
router.put('/actualizarimagenprincipalxidblog/:idblog', _blogs.default.editarImagenPrincipal);
router.put('/actualizarxidblog/:idblog', _blogs.default.editarBlogTexto);
router.put('/actualizaretiquetasxidblog/:idblog', _blogs.default.editarEtiquetas);
router.delete('/eliminarimagenxidimagen/:idimagen', _blogs.default.eliminarImagen);
router.delete('/eliminarxidblog/:idblog', _blogs.default.eliminarBlog);
var _default = router;
exports.default = _default;