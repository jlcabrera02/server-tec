"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _WhiteMenu = _interopRequireDefault(require("../controllers/WhiteMenu.controller"));
var _WhiteSubMenu = _interopRequireDefault(require("../controllers/WhiteSubMenu.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtener', _WhiteMenu.default.obtener);
router.post('/crear', _auth.verifyAdmin, _WhiteMenu.default.crear);
router.put('/editar/:idMenu', _auth.verifyAdmin, _WhiteMenu.default.editar);
router.delete('/eliminar/:idMenu', _auth.verifyAdmin, _WhiteMenu.default.eliminar);
router.get('/submenu/obtener', _auth.verifyAdmin, _WhiteSubMenu.default.obtener);
router.post('/submenu/crear', _auth.verifyAdmin, _WhiteSubMenu.default.crear);
router.put('/submenu/editar/:idSubMenu', _auth.verifyAdmin, _WhiteSubMenu.default.editar);
router.delete('/submenu/eliminar/:idSubMenu', _auth.verifyAdmin, _WhiteSubMenu.default.eliminar);
var _default = router;
exports.default = _default;