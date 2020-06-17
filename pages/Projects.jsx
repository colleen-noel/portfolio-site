import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Project from '../components/Project'
import Title from '../components/Title'
import retrieveProjects from '../actions/projects'

export default () => {
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    async function pullData() {
      const projects = await retrieveProjects()

      setProjectList(projects)
    }

    pullData()
  }, [])


  return (
    <Page>
      <nav className="navbar sticky-top navbar navbar-expand-lg intro">
        <span className="navbar-brand">Colleen Noel</span>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link" href="https://www.linkedin.com/in/colleen-noel-58878b144/">LinkedIn</a>
            <a className="nav-link" href="https://github.com/colleen-noel">GitHub</a>
            <a className="nav-link" href="mailto:noel.colleen@gmail.com">noel.colleen@gmail.com</a>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col col-1" />
          <div className="col col-10">
            <div className="intro">
              An aspiring front-end software engineer, I am currently finishing an 18-week Web
              Development Boot Camp.
              In such a short time, I have developed skills in front-end and back-end programming, and am looking
              forward to expanding upon this knowledge.
            </div>

          </div>

          <div className="col col-1" />
        </div>
        <div className="row">
          <div className="col col-2" />
          <div className="col col-8">
            <div className="projects">
              <Title />
              <div className="card">
                {
                  projectList.map(project => (<Project id={project.id} name={project.name} />))
                }
              </div>
            </div>
          </div>
          <div className="col col-2" />
        </div>
      </div>
    </Page>
  )
}
