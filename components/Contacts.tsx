import React from 'react'
import styled from 'styled-components'
import { Github, Instagram, Linkedin, Twitter } from './Icons'

export const Contacts = (): JSX.Element => {
  return (
    <Container>
      <Top>
        <Tittle>
          <TittleTop>
            <div></div>
            <p>SAY HELLO</p>
          </TittleTop>
          <TittleBottom>
            <p>CONTACT</p>
          </TittleBottom>
        </Tittle>
      </Top>
      <Details>
        <Dtop>
          <Pbox>
            <p>Get in Touch</p>
          </Pbox>
          <Subd>
            <Single>
              <Linkedin />
            </Single>
            <Single>
              <Instagram />
            </Single>
            <Single>
              <Twitter />
            </Single>
            <Single>
              <Github />
            </Single>
          </Subd>
        </Dtop>
        <Dbot>
          <Pbox>
            <p>Contact Form</p>
          </Pbox>
          <Inpotbox>
            <input placeholder="Your Name*" />
            <input placeholder="Your Email*" />
            <input placeholder="Subject*" />
            <input placeholder="Your Message*" />
          </Inpotbox>
          <button>Send</button>
        </Dbot>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 1000px;
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
  height: 700px;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
const Dtop = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 25px;
    margin-left: 30px;
    color: #333;
  }
`
const Pbox = styled.div`
  width: 100%;
  margin-bottom: 10px;
`
const Subd = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
    color: #333;
    transition: all 500ms;
    margin-top: 5px;
  }
`
const Dbot = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 25px;
    margin-left: 30px;
    color: #333;
  }
  button {
    width: 150px;
    height: 50px;
    border-radius: 35px;
    background-color: #4169e1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #00f7ff;
    font-size: 20px;
    margin-top: 15px;
  }
`
const Inpotbox = styled.div`
  width: 90%;
  height: auto;
  input {
    width: 90%;
    height: 50px;
    margin-bottom: 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 1px;
    font-size: 20px;
    padding-left: 10px;
    color: #333;
  }
`
const Single = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 5px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 1px 1px 1px 1px #eee;
  transition: all 500ms;
  :hover {
    width: 70px;
    height: 70px;
    box-shadow: 2px 2px 2px 2px #eee;
  }
`