import React from 'react'
import styled from 'styled-components'

export const Footer = (): JSX.Element => {
  return (
    <Container>
      <p>© Mojtaba Bahadori Zadeh 2022</p>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #333;
    font-size: 15px;
  }
`
