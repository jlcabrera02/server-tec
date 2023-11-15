"use strict";

var _express = _interopRequireDefault(require("express"));
var _expressFileupload = _interopRequireDefault(require("express-fileupload"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _path = _interopRequireDefault(require("path"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _dotenv = require("dotenv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { createTables } from '@models/index';
// createTables();
(0, _dotenv.config)();
const app = (0, _express.default)();
app.set('PORT', process.env.PORT);
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json({
  limit: '50mb'
}));
app.use((0, _cors.default)());
app.use((0, _morgan.default)('dev'));
app.use((0, _expressFileupload.default)()); //Para subir archivos
app.use('/static', _express.default.static(_path.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// app.use('/api', indexRoute);

app.listen(3000, () => {
  console.log(`App use port ${app.get('PORT')}`);
});