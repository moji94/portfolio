import React from 'react'
import styled, { css } from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useAtom } from 'jotai'
import { pageDirStore } from 'stores/store'

export const Top = (): JSX.Element => {
  const [dir, setDir] = useAtom(pageDirStore)
  const { t } = useTranslation('common')
  return (
    <Container dir={dir}>
      <Imagee>
        <div>
          <img
            src={'/images/personal.jpg'}
            alt={'its Mojtaba bahadori Zadeh'}
            className={'boom'}
          />
        </div>
      </Imagee>
      <Details>
        <p className="title">{t('hi')}</p>
        <h1>
          <p>{t('i')}</p>
          {t('name')}
          <p>{t('am')}</p>
        </h1>
        <p className="intro">{t('me')}</p>
        <div>
          <a href="/documents/Mojtaba BahadoriZadeh.pdf">
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
  ${({ dir }) =>
    dir === 'rtl'
      ? css`
          direction: rtl;
        `
      : css`
          direction: ltr;
        `}
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    flex-direction: column;
    height: 450px;
    padding-top: 30px;
    margin-bottom: 50px;
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
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin-right: 50px;
    box-shadow: 10px 0 #73a8fe, 20px 0 #92bcff, 30px 0 #c2dcff;
    img {
      border-radius: 50%;
      width: 350px;
      height: 350px;
      @media (max-width: 850px) {
        width: 200px;
        height: 200px;
      }
    }
    @media (max-width: 850px) {
      margin-right: 0;
      width: 200px;
      height: 200px;
    }
  }
  @media (max-width: 850px) {
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
  h1 {
    color: #4169e1;
    text-align: center;
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
      font-size: 25px;
    }
    @media (max-width: 400px) {
      font-size: 19.5px;
    }
    p {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 10px;
      font-size: 15px;
      color: #333;
      text-align: center;
      @media (max-width: 400px) {
        margin-top: 3px;
      }
    }
  }
  .title {
    margin-top: 30px;
    font-size: 15px;
    color: #333;
  }
  .intro {
    margin-top: 10px;
    font-size: 15px;
    color: #333;
    @media (max-width: 850px) {
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
    @media (max-width: 850px) {
      justify-content: center;
      align-items: flex-start;
    }
  }
  @media (max-width: 850px) {
    align-items: center;
    justify-content: flex-start;
    width: 75%;
    padding-left: 0;
    padding-right: 0;
  }
`
