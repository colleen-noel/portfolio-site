"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (connection, Sequelize) => connection.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  gitHubLink: {
    type: Sequelize.STRING
  },
  apps: {
    type: Sequelize.STRING
  },
  pictureName: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

exports.default = _default;