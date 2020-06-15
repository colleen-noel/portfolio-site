import fetchDetailsForProject from '../actions/details'

export const getProjectIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/projects/').pop()
  : ''
)

export const retrieveProject = async (location) => {
  const projectId = getProjectIdFromUrl(location)

  if (!projectId) return { details: {} }

  const project = await fetchDetailsForProject(projectId)

  if (!project) return { details: {} }

  return project
}
