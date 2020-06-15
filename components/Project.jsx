import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Project = styled.div`
 border: 2px solid black;
  padding: 10px;
  background-color: whitesmoke;
  margin-block-start: .5em;
  margin-block-end: .5em;
`

export default ({ id, name }) => {
  return (
    <Project key={id}>
      <NavLink to={`/projects/${id}`}>{`${name}`}</NavLink>
    </Project>
  )
}