import React from 'react'
import styled from 'styled-components'

export const SideBar = (): JSX.Element => {
  return (
    <Container>
      <p>sidebar</p>
    </Container>
  )
}

const Container = styled.div`
  width: 105px;
  height: 100vh;
  background-color: blue;
  transition: all 500ms;
  float: left;
  :hover {
    width: 220px;
  }
`
