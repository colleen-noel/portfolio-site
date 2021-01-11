/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Project = styled.div`
 border: 2px solid black;
  padding: 10px;
  background-color: whitesmoke;
  margin-block-start: .5em;
  margin-block-end: .5em
`

export default ({ project }) => (
  <Project>
    <NavLink to={`/projects/${project.id}`}>{`${project.name}`}</NavLink>
  </Project>
)
