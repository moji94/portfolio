import React from 'react'
import styled from 'styled-components'

export const SideBar = (): JSX.Element => {
  return (
    <Container>
      <Items>
        <SingleItem color="#FFF" size="20">
          Hello
        </SingleItem>
        <SingleItem color="#FFF">Hello</SingleItem>
        <SingleItem color="#FFF">Hello</SingleItem>
        <SingleItem>Hello</SingleItem>
      </Items>
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

const Items = styled.ul`
  width: 100%;
  height: 100vh;
  background-color: red;
  padding-left: 20px;
`
const SingleItem = styled.li<any>`
  width: 100%;
  height: 40px;
  color: ${(c) => (c.color ? c.color : '#00F')};
  font-size: ${(s) => (s.size ? s.size : 15)}px;
  position: relative;
  :hover {
    background-color: black;
  }
  ::after {
    content: 'H';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    right: 0;
  }
`
