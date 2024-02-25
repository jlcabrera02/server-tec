"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _subcategorias = _interopRequireDefault(require("../controllers/subcategorias.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtener', _subcategorias.default.obtenerSubcategorias);
router.post('/crear', _auth.verifyAdmin, _subcategorias.default.crearSubcategoria);
router.put('/editar/:idsubcategoria', _auth.verifyAdmin, _subcategorias.default.actualizarSubcategoria);
router.delete('/eliminar/:idsubcategoria', _auth.verifyAdmin, _subcategorias.default.eliminarSubcategoria);
var _default = router;
exports.default = _default;