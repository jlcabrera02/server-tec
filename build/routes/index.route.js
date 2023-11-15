"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _banners = _interopRequireDefault(require("./banners.route"));
var _blogs = _interopRequireDefault(require("./blogs.route"));
var _etiquetas = _interopRequireDefault(require("./etiquetas.route"));
var _obtenerImagenes = _interopRequireDefault(require("../utils/obtenerImagenes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.use('/banners', _banners.default);
router.use('/blogs', _blogs.default);
router.use('/etiquetas', _etiquetas.default);

//Get Images
router.get('/bannersimagenes/:imagen', _obtenerImagenes.default);
router.get('/blogsimagenes/:imagen', _obtenerImagenes.default);
var _default = router;
exports.default = _default;