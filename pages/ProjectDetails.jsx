import React, { useState, useEffect } from 'react'
import Details from '../components/Details'
import GoBack from '../components/GoBack'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import ProjectDetails from '../components/ProjectDetails'
import Title from '../components/Title'
import { retrieveProjects } from '../utils/projects'

export default ({ location }) => {
  const [projectName, setProjectName] = useState('')
  const [project, setProject] = useState({})
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, projects } = await retrieveProjects(location)

      setProjectName(details.name)
      setProject(details)
      setProjectList(projects)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        projectName
          ? (
            <>
              <ProjectDetails name={project.name} description={project.description} />
              {projectList.map(project => (
                <Details
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  description={project.description}
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry, that is not a project of mine" />)
      }
    </Page>
  )
}

