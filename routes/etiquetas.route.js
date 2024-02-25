"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _etiquetas = _interopRequireDefault(require("../controllers/etiquetas.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtener', _etiquetas.default.obtenerEtiquetas);
router.post('/insertar', _auth.verifyAdmin, _etiquetas.default.crearEtiqueta);
router.put('/actualizarxidetiqueta/:idetiqueta', _auth.verifyAdmin, _etiquetas.default.actualizarEtiqueta);
router.delete('/eliminarxidetiqueta/:idetiqueta', _auth.verifyAdmin, _etiquetas.default.eliminarEtiqueta);
var _default = router;
exports.default = _default;