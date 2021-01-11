export default (connection, Sequelize) => connection.define('projects', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING },
  gitHubLink: { type: Sequelize.STRING },
  apps: { type: Sequelize.STRING },
  pictureName: { type: Sequelize.STRING, allowNull: true },

})
