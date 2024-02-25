"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _users = _interopRequireDefault(require("../controllers/users.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/usuarios', _auth.verifyAdmin, _users.default.obtenerUsuarios);
router.get('/permisos', _auth.verifyAdmin, _users.default.obtenerPermisos);
router.get('/roles', _auth.verifyAdmin, _users.default.obtenerRoles);
router.get('/roles-permisos', _auth.verifyAdmin, _users.default.obtenerPermisos);
router.post('/crear-rol', _auth.verifyAdmin, _users.default.crearRol);
router.put('/editar-rol', _auth.verifyAdmin, _users.default.editarRol);
router.put('/change-rol', _auth.verifyAdmin, _users.default.cambiarRolUsuario);
router.delete('/eliminar-rol/:rol', _auth.verifyAdmin, _users.default.eliminarRol);
router.put('/asociar-rol-permiso', _auth.verifyAdmin, _users.default.asociarPermisosRoles);
router.post('/login', _users.default.login);
router.post('/crear-usuario', _auth.verifyAdmin, _users.default.crearUsuario);
var _default = router;
exports.default = _default;