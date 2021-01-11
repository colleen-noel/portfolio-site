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
              An aspiring front-end software engineer, I recently completed an 18-week Web
              Development Boot Camp. During that time I learned JavaScript, CSS, HTML, MySQL, REST API and React,
              and honed my skills by completing various projects and building a portfolio website.
              I continue to build upon this skillset, and am currently learning to build a website utilizing Angular 10.
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
                  projectList.map(project => (<Project project={project} key={project.id} />))
                }
              </div>
              <div className="credit">
                <a className="nav-link" href="https://www.myfreetextures.com/">background image courtesy of www.myfreetextures.com/</a>
              </div>
            </div>
          </div>
          <div className="col col-2" />
        </div>
      </div>
    </Page>
  )
}
