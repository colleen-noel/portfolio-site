import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(NavLink)`
  color: black;
  border: 5px solid indigo;
  padding: .25em;
  background-color: white;
  text-align: left;
`

export default () => (
  <Link to="/">&lt;&lt; Go Back</Link>
)
