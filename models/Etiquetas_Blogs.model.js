"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EtiquetasBlogs = _db.default.define('etiquetas_blogs', {
  /*  BlogIdblog: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  EtiquetaIdetiqueta: {
    type: DataTypes.INTEGER,
    primaryKey: true
  } */
});
var _default = EtiquetasBlogs;
exports.default = _default;