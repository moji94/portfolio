import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Home,
  About,
  Skills,
  Work,
  Contact,
  Bottom,
  Earth,
} from 'components/Index'

interface Props {
  change: 'desktop' | 'phone'
}

export const Sidebar = ({ change }: Props): JSX.Element => {
  const scroll = (y: number) => {
    document.documentElement.scrollTop = document.body.scrollTop = y
  }
  return (
    <Container change={change}>
      <Namee>
        <p>MBZ</p>
      </Namee>

      <Langu>
        <Bottom />
        <Earth />
        <LanguDrop className="drop">
          <div className="left">FA</div>
          <div className="right">EN</div>
        </LanguDrop>
      </Langu>
      <Items>
        <SingleItem
          onClick={() => {
            scroll(0)
          }}
        >
          <Home />
          <p className="pp">HOME </p>
        </SingleItem>
        <SingleItem
          onClick={() => {
            scroll(500)
          }}
        >
          <About />
          <p className="pp">ABOUT </p>
        </SingleItem>
        <SingleItem
          onClick={() => {
            scroll(1000)
          }}
        >
          <Skills />
          <p className="pp"> SKILLS </p>
        </SingleItem>
        <SingleItem
          onClick={() => {
            scroll(1500)
          }}
        >
          <Work />
          <p className="pp">WORK </p>
        </SingleItem>
        <SingleItem
          onClick={() => {
            scroll(3950)
          }}
        >
          <Contact />
          <p className="pp"> CONTACT</p>
        </SingleItem>
      </Items>
    </Container>
  )
}

const Container = styled.div<{ change: 'desktop' | 'phone' }>`
  width: 70px;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #4169e1;
  align-items: center;
  flex-direction: column;
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
  @media (max-width: 750px) {
    display: ${(d) => (d.change === 'phone' ? 'inline-block' : 'none')};
  }
`

const Items = styled.ul`
  width: 100%;
  height: 100%;
  background-color: #4169e1;
  flex-direction: column;
  display: flex;
  padding-left: 20px;
  justify-content: center;
  align-items: flex-start;
  list-style-type: none;
  padding-bottom: 110px;
`
const SingleItem = styled.li<any>`
  width: 90px;
  height: 40px;
  display: flex;
  margin-top: 2px;
  flex-direction: row;
  color: #ccc;
  font-size: 20px;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
  transition: all 500ms;
  :hover {
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
const Langu = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: #4169e1;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 50px;
    height: 25px;
  }
  hover {
    opacity: 1;
  }
  &:hover .drop {
    transition: all 500ms;
    height: 100px;
    width: 100%;
  }
  p {
    color: #4169e1;
    font-size: 30px;
    margin-top: 5px;
    @media (max-width: 750px) {
      font-size: 18px;
    }
  }
`
const LanguDrop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 500ms;
  .left {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
  }
  .right {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
`
