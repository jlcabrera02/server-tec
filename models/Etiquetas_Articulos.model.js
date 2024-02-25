"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EtiquetasArticulos = _db.default.define('etiquetas_articulos', {});
var _default = EtiquetasArticulos;
exports.default = _default;