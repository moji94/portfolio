import React from 'react'
import styled from 'styled-components'
import {
  Css,
  Html,
  Js,
  Sass,
  Reacts,
  Next,
  Express,
  Typescript,
  Nodejs,
  Prisma,
  Rest,
  Postman,
  Git,
  Postgree,
} from './Icons'

export const Skill = (): JSX.Element => {
  return (
    <Container>
      <Top>
        <Tittle>
          <TittleTop>
            <div></div>
            <p>CHECK OUT ME</p>
          </TittleTop>
          <TittleBottom>
            <p>SKILLS</p>
          </TittleBottom>
        </Tittle>
      </Top>

      <Details>
        <Single>
          <Html />
          <p>HTML</p>
        </Single>
        <Single>
          <Css />
          <p>CSS</p>
        </Single>
        <Single>
          <Sass />
          <p>SASS</p>
        </Single>
        <Single>
          <Js />
          <p>Javascript</p>
        </Single>
        <Single>
          <Reacts />
          <p>ReactNative</p>
        </Single>
        <Single>
          <Next />
          <p>NextJs</p>
        </Single>
        <Single>
          <Express />
          <p>ExpressJs</p>
        </Single>
        {/* top section */}
        <Single>
          <Typescript />
          <p>Typescript</p>
        </Single>
        <Single>
          <Nodejs />
          <p>NodeJs</p>
        </Single>
        <Single>
          <Prisma />
          <p>PrismaJs</p>
        </Single>
        <Single>
          <Rest />
          <p>Rest API</p>
        </Single>
        <Single>
          <Postman />
          <p>Postman</p>
        </Single>
        <Single>
          <Git />
          <p>Git</p>
        </Single>
        <Single>
          <Postgree />
          <p>PostgreeSQL</p>
        </Single>
        {/* bottom section */}
      </Details>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  /* @media (max-width: 750px) {
    height: auto;
  } */
`
const Top = styled.div`
  width: 90%;
  height: 55px;
`
const Tittle = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`
const TittleTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  div {
    width: 45px;
    margin-left: 30px;
    border-top: 1.5px solid #333;
  }
  p {
    margin-left: 20px;
    color: #333;
    font-size: 10px;
  }
`
const TittleBottom = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    margin-left: 30px;
    font-size: 25px;
    color: #333;
  }
`
const Details = styled.div`
  width: 70%;
  height: 300px;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  /* @media (max-width: 750px) {
    height: auto;
  } */
`
const Single = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 1px 1px 1px 1px #eee;
  transition: all 500ms;
  :hover {
    width: 85px;
    height: 85px;
    box-shadow: 5px 5px 5px 5px #eee;
    p {
      font-size: 15px;
      @media (max-width: 750px) {
        font-size: 10px;
      }
    }
  }
  p {
    font-size: 12px;
    color: #333;
    transition: all 500ms;
    margin-top: 5px;
    @media (max-width: 750px) {
      font-size: 8px;
    }
  }
  @media (max-width: 750px) {
    width: 50px;
    height: 50px;
    :hover {
      width: 60px;
      height: 60px;
    }
  }
`
