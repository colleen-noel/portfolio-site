import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  background-image: url("../pictures/pink-and-purple-pattern-1517773944XUB.jpg");
  color: black;
`


export default ({ children }) => (<Page>{children}</Page>)

