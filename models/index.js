
import Sequelize from 'sequelize'
import allConfigs from '../config/sequelize'

import ProjectsModel from './projects'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const {
  username, password, database, host, dialect,
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const Projects = ProjectsModel(connection, Sequelize)

export default {
  Projects,
  Sequelize,
  Op: Sequelize.Op,
}
