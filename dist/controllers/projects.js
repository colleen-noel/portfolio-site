"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjectById = exports.getProjectByName = exports.getAllProjects = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllProjects = async (request, response) => {
  const projects = await _models.default.Projects.findAll();
  return response.send(projects);
};

exports.getAllProjects = getAllProjects;

const getProjectByName = async (request, response) => {
  const {
    name
  } = request.params;
  const project = await _models.default.Projects.findOne({
    where: {
      name: {
        [_models.default.Sequelize.Op.like]: `%${name}%`
      }
    }
  });
  return project ? response.send(project) : response.sendStatus(404);
};

exports.getProjectByName = getProjectByName;

const getProjectById = async (request, response) => {
  const {
    id
  } = request.params;
  const project = await _models.default.Projects.findOne({
    where: {
      id
    }
  });
  return project ? response.send(project) : response.sendStatus(404);
};

exports.getProjectById = getProjectById;