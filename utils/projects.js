import fetchDetailsForProject from '../actions/details'

export const getProjectNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/projects/').pop()
  : ''
)

export const retrieveProjects = async (location) => {
  const projectName = getProjectNameFromUrl(location)

  if (!projectName) return { details: {}, projects: [] }

  const { id, name, description, gitHubLink, apps, pictureName } = await fetchDetailsForProject(projectName)

  if (!id || !name || !description || !gitHubLink || !apps || !pictureName) return { details: {}, projects: [] }

  return { projects, details: { id, name, description, gitHubLink, apps, pictureName } }
}
