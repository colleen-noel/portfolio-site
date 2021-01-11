import React from 'react'
import styled from 'styled-components'

const Details = styled.div`
  background-color: whitesmoke;
  color: black;
  border: 5px solid indigo;
  padding: 1em; 
  border-radius: 8px;
  text-align: center
`

export default ({ project }) => {
  let appsList = project.apps
    ? JSON.parse(project.apps)
    : []

  appsList = appsList.map((app, i) => ({
    key: i,
    value: app,
  }))

  return (
    <Details key={project.id}>
      <h2>{project.name}</h2>
      <div>{project.description}</div>
      <div>
        <a href={project.gitHubLink}>{project.gitHubLink}</a>
      </div>
      <ul className="list">
        Applications Used to Build This Project:
        {appsList.map(app => <li key={app.key}>{app.value}</li>)}
      </ul>
      <div>
        <img src={project.pictureName} style={{ width: '650px' }} alt="project thumbnail" />
      </div>
    </Details>
  )
}
