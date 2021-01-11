import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
  font-size: 36px;
  margin: 1em 0;
  text-align: center;
`

export default ({ message }) => (
  <Message>{message}</Message>
)
