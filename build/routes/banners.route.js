"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _banners = _interopRequireDefault(require("../controllers/banners.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get('/obtener', _banners.default.obtenerBanners);
router.post('/crear', _banners.default.crearBanner);
router.put('/actualizarxidbanner/:idbanner', _banners.default.actualizarBanner);
router.put('/actualizarvigenciaxidbanner/:idbanner', _banners.default.vigenciaBanner);
router.delete('/eliminarxidbanner/:idbanner', _banners.default.eliminarBanner);
var _default = router;
exports.default = _default;