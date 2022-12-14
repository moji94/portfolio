import React from 'react'
import styled, { css } from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useAtom } from 'jotai'
import { pageDirStore } from 'stores/store'

export const Projects = () => {
  const [dir, setDir] = useAtom(pageDirStore)
  const { t } = useTranslation('common')
  return (
    <Container dir={dir}>
      <Top>
        <Tittle>
          <TittleTop>
            <div></div>
            <p>{t('look')}</p>
          </TittleTop>
          <TittleBottom>
            <p>{t('project')}</p>
          </TittleBottom>
        </Tittle>
      </Top>
      <Details>
        <Box>
          <Pic>
            <img
              src={'/images/KhuzLand.png'}
              alt={'khuzland'}
              width="175"
              height="200"
            />
          </Pic>
          <Text>
            <h2>{t('khuzland')}</h2>
            <p>{t('khuzlands')}</p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/belderchin.png'}
              alt={'belderchin'}
              width="175"
              height="200"
            />
          </Pic>
          <Text>
            <h2>{t('belderchin')}</h2>
            <p>{t('belderchins')}</p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/GoldenCloud.png'}
              alt={'GoldenCloud'}
              width="175"
              height="200"
            />
          </Pic>
          <Text>
            <h2>{t('goldencloud')}</h2>
            <p>{t('goldenclouds')}</p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/mehan.jpg'}
              alt={'MehanTrade'}
              width="200"
              height="200"
            />
          </Pic>
          <Text>
            <h2>{t('mehantrade')}</h2>
            <p>{t('mehantrades')}</p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/salomba.png'}
              alt={'salomba'}
              width="220"
              height="200"
            />
          </Pic>
          <Text>
            <h2>{t('salomba')}</h2>
            <p>{t('salombas')}</p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/patcher.png'}
              alt={'patcher'}
              width="220"
              height="200"
            />
          </Pic>
          <Text>
            <h2>{t('patcher')}</h2>
            <p>{t('patchers')}</p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/dezlive.png'}
              alt={'dezlive'}
              width="175"
              height="200"
            />
          </Pic>
          <Text>
            <h2>{t('dezlive')}</h2>
            <p>{t('dezlives')}</p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/forcegame.png'}
              alt={'forcegame'}
              width="190"
              height="200"
            />
          </Pic>
          <Text>
            <h2>{t('forcegame')}</h2>
            <p>{t('forcegames')}</p>
          </Text>
        </Box>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
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
    margin-left: 30px;
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
  width: 80%;
  height: auto;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding-top: 30px;
  @media (max-width: 850px) {
    width: 90%;
  }
`
const Box = styled.div`
  width: 80%;
  height: 300px;
  box-shadow: 1px 30px 30px #eee;
  border: 1px solid #eee;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 850px) {
    width: 90%;
    height: 350px;
    flex-direction: column;
  }
`
const Pic = styled.div`
  width: 40%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  img {
    border-radius: 25px;
  }
  @media (max-width: 850px) {
    margin-top: 10px;
  }
`
const Text = styled.div`
  width: 60%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  color: #333;
  h2 {
    margin-bottom: 30px;
    @media (max-width: 850px) {
      margin-bottom: 10px;
    }
  }
  p {
    font-size: 15px;
    @media (max-width: 850px) {
      text-align: center;
    }
  }
  @media (max-width: 850px) {
    width: 90%;
    height: 350px;
  }
`
