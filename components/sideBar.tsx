import React from 'react'
import styled from 'styled-components'
import { Home, About, Skills, Work, Contact } from '@components'

export const SideBar = (): JSX.Element => {
  return (
    <Container>
      <Name>
        <p>MBZ</p>
      </Name>

      <Items>
        <SingleItem>
          <Home />
          <p className="pp">HOME </p>
        </SingleItem>
        <SingleItem>
          <About />
          <p className="pp">ABOUT </p>
        </SingleItem>
        <SingleItem>
          <Skills />
          <p className="pp"> SKILLS </p>
        </SingleItem>
        <SingleItem>
          <Work />
          <p className="pp">WORK </p>
        </SingleItem>
        <SingleItem>
          <Contact />
          <p className="pp">CONTACT</p>
        </SingleItem>
      </Items>
    </Container>
  )
}

const Container = styled.div`
  width: 105px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  color: #ccc;
  transition: all 500ms;
  :hover {
    width: 220px;
  }
  &:hover .pp {
    transition: all 500ms;
    opacity: 1;
  }
`

const Items = styled.ul`
  width: 100%;
  height: 85vh;
  background-color: #4169e1;
  flex-direction: column;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  list-style-type: none;
`
const SingleItem = styled.li<any>`
  width: 175px;
  height: 50px;
  display: flex;
  flex-direction: row;
  color: #ccc;
  font-size: 20px;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  transition: all 800ms;
  :hover {
    background-color: rgba(102, 140, 194, 0.5);
    box-shadow: 2px 2px 2px 2px rgba(39, 61, 93, 0.3);
    cursor: pointer;
  }
  p {
    opacity: 0;
    font-size: 15px;
  }
`
const Name = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #255db2;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
    font-family: 'Vazir';
  }
`
