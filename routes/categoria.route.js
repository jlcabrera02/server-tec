"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _categorias = _interopRequireDefault(require("../controllers/categorias.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtener', _categorias.default.obtenerCategorias);
router.post('/crear', _auth.verifyAdmin, _categorias.default.crearCategoria);
router.put('/editar/:idcategoria', _auth.verifyAdmin, _categorias.default.actualizarCategoria);
router.delete('/eliminar/:idcategoria', _auth.verifyAdmin, _categorias.default.eliminarCategoria);
var _default = router;
exports.default = _default;