"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const generadornombre = () => {
  let d = new Date().getTime();
  let uuid = 'itsrxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};
var _default = generadornombre;
exports.default = _default;