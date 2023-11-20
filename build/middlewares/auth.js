"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyAdmin = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = require("dotenv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _dotenv.config)();
const verifyAdmin = async (req, res, next) => {
  try {
    const {
      authorization
    } = req.headers;
    const token = authorization ? authorization.replace('Bearer ', '') : null;
    if (!token) {
      return res.status(403).json({
        ok: false,
        msg: 'No token'
      });
    }
    const userAuth = await _jsonwebtoken.default.verify(token, process.env.PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24
    });
    if (userAuth) {
      next();
    } else {
      res.status(403).json({
        ok: false,
        msg: 'No autorizado'
      });
    }
  } catch (err) {
    res.status(403).json({
      ok: false,
      msg: 'No autorizado'
    });
  }
};
exports.verifyAdmin = verifyAdmin;