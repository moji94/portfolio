import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const Top = (): JSX.Element => {
  return (
    <Container>
      <Imagee>
        <div>
          <img
            src={'/images/personal.jpg'}
            alt={'its Mojtaba bahadori Zadeh'}
            width="350"
            height="350"
          />
        </div>
      </Imagee>
      <Details>
        <p>HI THERE! I'M</p>
        <h1>Mojtaba Bahadori Zadeh</h1>
        <p>
          A Front-End Web Developer passionate about creating interactive
          applications and experiences on the web
        </p>
        <div>
          <div>
            <p>Resume</p>
          </div>
        </div>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  width: 150vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const Imagee = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin-right: 50px;
    box-shadow: 12px 0 #73a8fe, 24px 0 #92bcff, 36px 0 #c2dcff;
    z-index: 1;
    img {
      border-radius: 50%;
    }
  }
`
const Details = styled.div`
  width: 50%;
  height: 400px;
  padding-top: 30px;
  padding-left: 50px;
  h1 {
    color: #4169e1;
  }
  p {
    margin-top: 10px;
    font-size: 20px;
    color: #333;
  }
  div {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div {
      width: 150px;
      height: 50px;
      border-radius: 35px;
      background-color: #4169e1;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #00f7ff;
      p {
        color: #fff;
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
`
