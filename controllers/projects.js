import models from '../models'

export const getAllProjects = async (request, response) => {
  const projects = await models.Projects.findAll()

  return response.send(projects)
}

export const getProjectByName = async (request, response) => {
  const { name } = request.params

  const project = await models.Projects.findOne({
    where: {
      name: { [models.Sequelize.Op.like]: `%${name}%` },
    },
  })

  return project
    ? response.send(project)
    : response.sendStatus(404)
}
