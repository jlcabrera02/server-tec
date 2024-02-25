"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _convocatorias = _interopRequireDefault(require("../controllers/convocatorias.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtener', _convocatorias.default.obtenerConvocatorias);
router.get('/obtener/convocatoria/:url', _convocatorias.default.obtenerConvocatoria);
router.post('/crear', _auth.verifyAdmin, _convocatorias.default.crearConvocatoria);
router.post('/upload-pdf', _auth.verifyAdmin, _convocatorias.default.subirArchivo);
router.put('/actualizardatosxidconvocatoria/:idconvocatoria', _auth.verifyAdmin, _convocatorias.default.actualizarConvocatoriasDatos);
router.put('/actualizarimgxidconvocatoria/:idconvocatoria', _auth.verifyAdmin, _convocatorias.default.actualizarImagen);
router.put('/actualizarpdfxidconvocatoria/:idconvocatoria', _auth.verifyAdmin, _convocatorias.default.actualizarPDF);
router.delete('/eliminarxidconvocatoria/:idconvocatoria', _auth.verifyAdmin, _convocatorias.default.eliminarConvocatoria);
var _default = router;
exports.default = _default;