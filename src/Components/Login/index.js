import React from 'react'
import styled from 'styled-components'
import Box from './Box'
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

export default function index() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  )
}
