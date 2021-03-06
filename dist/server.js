"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _projects = require("./controllers/projects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.static('public'));
app.get('/api/projects', _projects.getAllProjects);
app.get('/api/projects/:name', _projects.getProjectByName);
app.get('/api/project/:id', _projects.getProjectById);
app.all('*', (request, response) => response.sendFile(_path.default.resolve(__dirname, 'public', 'index.html')));
const port = process.env.PORT ? process.env.PORT : 4004;
app.listen(port, () => {
  console.log('Listening on port ${port}...'); // eslint-disable-line no-console
});