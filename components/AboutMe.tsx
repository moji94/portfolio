import React from 'react'
import styled from 'styled-components'

export const AboutMe = (): JSX.Element => {
  return (
    <Container>
      <Top>
        <Tittle>
          <TittleTop>
            <div></div>
            <p>SOME INFO</p>
          </TittleTop>
          <TittleBottom>
            <p>ABOUT ME</p>
          </TittleBottom>
        </Tittle>
      </Top>
      <Bottom>
        <Details>
          <p>
            I'm a front-end web developer with a background in computer systems
            and network infrastructure. My 8 years of IT experience has given me
            a strong foundation for web development and building complex
            solutions. Recently, I graduated from the Juno College Immersive Web
            Development Bootcamp. I am passionate about coding and solving
            problems through code, and I am excited to work alongside other
            amazing programmers and learn so much more!
          </p>
        </Details>
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 40px;
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
const Bottom = styled.div`
  width: 80%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
`
const Details = styled.div`
  width: 80%;
  height: 250px;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 50px;

  p {
    color: #333;
    font-size: 20px;
    padding: 48px;
  }
`
