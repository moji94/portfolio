import React from 'react'
import styled from 'styled-components'

export const SideBar = (): JSX.Element => {
  return (
    <Container>
      <Name>
        <p>MBZ</p>
      </Name>

      <Items>
        <SingleItem>
          <h5>Hello </h5>
          <p className="pp"> world</p>
        </SingleItem>
        <SingleItem>
          <h5>Hello </h5> <p className="pp"> mojy</p>
        </SingleItem>
        <SingleItem>
          <h5>Hello </h5> <p className="pp"> lollo</p>
        </SingleItem>
        <SingleItem>
          <h5>Hello </h5> <p className="pp"> bahba</p>
        </SingleItem>
        <SingleItem>
          <h5>Hello</h5> <p className="pp"> james</p>
        </SingleItem>
      </Items>
    </Container>
  )
}

const Container = styled.div`
  width: 105px;
  height: 100vh;
  color: #ccc;
  transition: all 500ms;
  float: left;
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
  padding-left: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`
const SingleItem = styled.li<any>`
  width: 150px;
  height: 50px;
  display: flex;
  flex-direction: row;
  color: #ccc;
  font-size: 20px;
  margin: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
  :hover {
    background-color: rgba(102, 140, 194, 0.5);
    box-shadow: 2px 2px 2px 2px rgba(39, 61, 93, 0.3);
    cursor: pointer;
  }
  p {
    opacity: 0;
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
