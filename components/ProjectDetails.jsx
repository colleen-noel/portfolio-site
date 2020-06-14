import React from 'react'
import styled from 'styled-components'

const Details = styled.div`
  background-color: whitesmoke;
  color: black;
  border: 5px solid indigo;
  padding: 1em; 
  border-radius: 8px;
`

export default ({ name, description }) => (
  <Details>{`${name} (${description}) `}</Details>
)