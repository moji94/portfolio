import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'

export const Top = (): JSX.Element => {
  const { t } = useTranslation('common')
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
        <p className="title">{t('hi')}</p>
        <h2>
          <p>{t('am')}</p>
          {t('name')}
          <p>{t('i')}</p>
        </h2>
        <p className="intro">{t('me')}</p>
        <div>
          <a href="/images/86.jpg">
            <button>{t('resome')}</button>
          </a>
        </div>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
    height: 450px;
    padding-top: 30px;
  }
`

const Imagee = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: row;
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
    @media (max-width: 750px) {
      margin-right: 0;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    width: 50%;
    justify-content: center;
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
    text-align: center;
    display: flex;
    flex-direction: row;
    p {
      margin: 10px;
      font-size: 12px;
      color: #333;
    }
  }
  .title {
    margin-top: 30px;
    font-size: 12px;
    color: #333;
  }
  .intro {
    margin-top: 10px;
    font-size: 12px;
    color: #333;
    @media (max-width: 750px) {
      text-align: center;
      margin-top: 0;
    }
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
      font-family: 'Vazir';
    }
    @media (max-width: 750px) {
      justify-content: center;
      align-items: flex-start;
    }
  }
  @media (max-width: 750px) {
    align-items: center;
    justify-content: flex-start;
    width: 75%;
    padding-left: 0;
    padding-right: 0;
  }
`
