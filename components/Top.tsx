import React from 'react'
import styled from 'styled-components'

export const Top = (): JSX.Element => {
  return (
    <Container>
      <Imagee>
        <div>
          <img
            src={'/images/personal.jpg'}
            alt={'its Mojtaba bahadori Zadeh'}
            width="250"
            height="250"
          />
        </div>
      </Imagee>
      <Details>
        <p className="title">HI THERE! I'M</p>
        <h2>Mojtaba Bahadori Zadeh</h2>
        <p className="intro">
          A Front-End Web Developer passionate about creating interactive
          applications and experiences on the web
        </p>
        <div>
          <button>Resume</button>
        </div>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Imagee = styled.div`
  width: 50%;
  height: 400px;
  display: flex;

  justify-content: flex-end;
  align-items: center;
  div {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-right: 50px;
    box-shadow: 10px 0 #73a8fe, 20px 0 #92bcff, 30px 0 #c2dcff;
    z-index: 1;
    img {
      border-radius: 50%;
    }
  }
`
const Details = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 100px;
  h2 {
    color: #4169e1;
  }
  .title {
    margin-top: 30px;
    font-size: 12px;
    color: #333;
  }
  .intro {
    max-width: 507px;
    margin-top: 10px;
    font-size: 12px;
    color: #333;
  }
  div {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    button {
      width: 100px;
      height: 30px;
      border-radius: 35px;
      background-color: #4169e1;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #00f7ff;
      font-size: 12px;
    }
  }
`
