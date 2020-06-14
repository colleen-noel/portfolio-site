import React from 'react'
import styled from 'styled-components'

const PageDiv = styled.div`
  background-image: url("../pictures/pink-and-purple-pattern-1517773944XUB.jpg");
  color: black;
  `


export default ({ children }) => (
  <PageDiv>{children}</PageDiv>
)
