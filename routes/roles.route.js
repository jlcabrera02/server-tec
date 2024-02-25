"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _articulos = _interopRequireDefault(require("../controllers/articulos.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtener', _articulos.default.obtenerArticulos);
router.get('/obtener/:ruta', _articulos.default.obtenerArticulo);
router.post('/crear', _auth.verifyAdmin, _articulos.default.crearArticulo);
router.put('/editar/:idarticulo', _auth.verifyAdmin, _articulos.default.actualizarArticulo);
router.put('/actualizaretiquetasxidarticulo/:idarticulo', _auth.verifyAdmin, _articulos.default.editarEtiquetas);
router.delete('/eliminar/:idarticulo', _auth.verifyAdmin, _articulos.default.eliminarArticulo);
var _default = router;
exports.default = _default;