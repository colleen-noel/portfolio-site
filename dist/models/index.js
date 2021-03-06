"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _sequelize2 = _interopRequireDefault(require("../config/sequelize"));

var _projects = _interopRequireDefault(require("./projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const {
  username,
  password,
  database,
  host,
  dialect
} = _sequelize2.default[environment];
const connection = new _sequelize.default(database, username, password, {
  host,
  dialect
});
const Projects = (0, _projects.default)(connection, _sequelize.default);
var _default = {
  Projects,
  Sequelize: _sequelize.default,
  Op: _sequelize.default.Op
};
exports.default = _default;