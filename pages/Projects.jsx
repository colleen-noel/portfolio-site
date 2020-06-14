import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Project2 from '../components/Project'
import Title from '../components/Title'
import { retrieveProjects } from '../actions/projects'

export default () => {
  const [project, setProject] = useState('')
  const [projectList, setProjectList] = useState([])

  const updateProject = (event) => {
    setProject(event.target.value)
  }

  useEffect(() => {
    async function pullData() {
      const projects = await retrieveProjects()

      setProjectList(projects)
    }

    pullData()
  }, [])



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-1" />
          <div className="col col-10">
            <div className="intro">
              <h1>Colleen Noel
                
              </h1>
                      An aspiring front-end software engineer, I am currently finishing an 18-week Web
                      Development Boot Camp.
                      In such a short time, I have developed skills in front-end and back-end programming, and am looking
                      forward to expanding upon this knowledge.
            </div> 
          </div>
          <div className="col col-1" />
        </div>
        <div className="row" />
          <div className="col col-2" />
          <div className="col col-8">
            <div className="projects">
              <Title />
              <div className="card">
                <input type="text" name="select" onClick={updateProject} />
                <div className="card-body">{project}</div>
                {
                  projectList.map(project => (<Project2 key={project.id} name={project.name} />))
                }
              </div>
            </div>
          </div>
          <div className="col col-2" />
        </div>
    </div>
  )
}
