import React from 'react'
import styled, { css } from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useAtom } from 'jotai'
import { pageDirStore } from 'stores/store'

export const AboutMe = (): JSX.Element => {
  const [dir, setDir] = useAtom(pageDirStore)
  const { t } = useTranslation('common')
  return (
    <Container dir={dir}>
      <Top>
        <Tittle>
          <TittleTop>
            <div></div>
            <p>{t('some')}</p>
          </TittleTop>
          <TittleBottom>
            <p>{t('aboutme')}</p>
          </TittleBottom>
        </Tittle>
      </Top>
      <Bottom>
        <Details>
          <p>{t('aboutd')}</p>
        </Details>
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ dir }) =>
    dir === 'rtl'
      ? css`
          direction: rtl;
        `
      : css`
          direction: ltr;
        `}
  @media (max-width: 400px) {
    margin-top: 50px;
  }
`
const Top = styled.div`
  width: 80%;
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
    border-top: 1.5px solid #333;
    ${({ dir }) =>
      dir === 'rtl'
        ? css`
            margin-right: 30px;
          `
        : css`
            margin-left: 30px;
          `}
    @media (max-width: 850px) {
      margin-left: 20;
    }
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
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  @media (max-width: 850px) {
    width: 80%;
    height: auto;
  }
`
const Details = styled.div`
  width: 100%;
  min-width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 850px) {
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
  }
  p {
    color: #333;
    font-size: 16px;
    padding: 30px;
  }
`
