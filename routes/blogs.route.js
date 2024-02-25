"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _blogs = _interopRequireDefault(require("../controllers/blogs.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtenerxidblog/:idblog', _blogs.default.obtenerBlog);
router.get('/obtener', _blogs.default.obtenerBlogs);
router.get('/filtrar', _blogs.default.obtenerBlogFiltroEtiqueta);
router.post('/crear', _auth.verifyAdmin, _blogs.default.crearBlog);
router.post('/nuevaimagen', _auth.verifyAdmin, _blogs.default.nuevaImagen);
router.put('/cambiarestatusxidblog/:idblog', _auth.verifyAdmin, _blogs.default.modificarEstatus);
router.put('/editarimagenxidimagen/:idimagen', _auth.verifyAdmin, _blogs.default.editarImagenes);
router.put('/actualizarimagenprincipalxidblog/:idblog', _auth.verifyAdmin, _blogs.default.editarImagenPrincipal);
router.put('/actualizarxidblog/:idblog', _auth.verifyAdmin, _blogs.default.editarBlogTexto);
router.put('/actualizaretiquetasxidblog/:idblog', _auth.verifyAdmin, _blogs.default.editarEtiquetas);
router.delete('/eliminarimagenxidimagen/:idimagen', _auth.verifyAdmin, _blogs.default.eliminarImagen);
router.delete('/eliminarxidblog/:idblog', _auth.verifyAdmin, _blogs.default.eliminarBlog);
var _default = router;
exports.default = _default;