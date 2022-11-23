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
        <Section>
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
        </Section>
        {/* top section */}
        <Section>
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
        </Section>
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
`
const Top = styled.div`
  width: 60%;
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
  width: 60%;
  height: 250px;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
const Section = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const Single = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 5px;
  box-shadow: 1px 1px 1px 1px #eee;
  transition: all 500ms;
  :hover {
    width: 90px;
    height: 90px;
    box-shadow: 5px 5px 5px 5px #eee;
    p {
      font-size: 15px;
    }
  }
  p {
    font-size: 12px;
    color: #333;
    transition: all 500ms;
    margin-top: 5px;
  }
`
