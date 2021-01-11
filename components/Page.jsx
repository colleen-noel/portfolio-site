import React from 'react'
import styled from 'styled-components'

const PageDiv = styled.div`
  color: black;
`


export default ({ children }) => (
  <PageDiv>{children}</PageDiv>
)
