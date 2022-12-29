import React from 'react'
import styled from 'styled-components'
import { Home, About, Skills, Work, Contact } from '@components'

export const Sidebar = (): JSX.Element => {
  return (
    <Container>
      <Namee>
        <p>MBZ</p>
      </Namee>

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
          <p className="pp"> CONTACT</p>
        </SingleItem>
      </Items>
    </Container>
  )
}

const Container = styled.div`
  width: 70px;
  height: 90%;
  position: fixed;
  top: 0;
  left: 0;
  color: #ccc;
  transition: all 500ms;
  :hover {
    width: 130px;
  }
  &:hover .pp {
    transition: all 500ms;
    opacity: 1;
  }
`

const Items = styled.ul`
  width: 100%;
  height: 100%;
  background-color: #4169e1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`
const SingleItem = styled.li<any>`
  width: 75px;
  height: 40px;
  display: flex;
  flex-direction: row;
  color: #ccc;
  font-size: 20px;
  border-radius: 5px;
  margin-left: 20px;
  justify-content: space-around;
  align-items: center;
  transition: all 300ms;
  padding-left: 10px;
  :hover {
    width: 90px;
    background-color: rgba(102, 140, 194, 0.5);
    box-shadow: 2px 2px 2px 2px rgba(39, 61, 93, 0.3);
    cursor: pointer;
  }
  p {
    opacity: 0;
    font-size: 10px;
    margin-left: 5px;
  }
`
const Namee = styled.div`
  width: 100%;
  height: 70px;
  background-color: #255db2;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 25px;
    font-family: 'Vazir';
    margin-top: 5px;
  }
`
