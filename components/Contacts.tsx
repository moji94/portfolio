import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Github, Instagram, Linkedin, Twitter } from './Icons'
import { useTranslation } from 'next-i18next'
import { useAtom } from 'jotai'
import { pageDirStore } from 'stores/store'
import Link from 'next/link'

export const Contacts = (): JSX.Element => {
  const [dir, setDir] = useAtom(pageDirStore)
  const { t } = useTranslation('common')
  const [name, setName] = useState<string>('')
  return (
    <Container dir={dir}>
      <Top>
        <Tittle>
          <TittleTop>
            <div></div>
            <p>{t('hello')}</p>
          </TittleTop>
          <TittleBottom>
            <p>{t('contact')}</p>
          </TittleBottom>
        </Tittle>
      </Top>
      <Details>
        <Dtop>
          <Pbox>
            <p>{t('touch')}</p>
          </Pbox>
          <Subd>
            <Single>
              <Link
                href={'https://www.linkedin.com/in/mojtaba-bahadori-zadeh/'}
              >
                <Linkedin />
              </Link>
            </Single>
            <Single>
              <Link href={'https://www.instagram.com/mojtaba_bahadori_zadeh/'}>
                <Instagram />
              </Link>
            </Single>
            <Single>
              <Link href={'https://twitter.com/@MBahadoriZ94'}>
                <Twitter />
              </Link>
            </Single>
            <Single>
              <Link href={'https://github.com/moji94'}>
                <Github />
              </Link>
            </Single>
          </Subd>
        </Dtop>
        <Dbot>
          <Pbox>
            <p>{t('form')}</p>
          </Pbox>
          <Inpotbox>
            <input placeholder={`${t('fname')}`} />
            <input placeholder={`${t('femail')}`} />
            <input placeholder={`${t('fsobject')}`} />
            <input placeholder={`${t('fmessage')}`} />
          </Inpotbox>
          <button>{t('send')}</button>
        </Dbot>
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
  width: 80%;
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
  height: 40%;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 50px;

  p {
    font-size: 20px;
  }

  @media (max-width: 850px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
const Subd = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  margin-bottom: 10px;
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
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    ${({ dir }) =>
      dir === 'rtl'
        ? css`
            padding-right: 30px;
            @media (max-width: 400px;) {
              padding-right: 10px;
            }
          `
        : css`
            padding-left: 30px;
            @media (max-width: 400px;) {
              padding-left: 10px;
            }
          `}
    color: #333;
  }
  button {
    width: 150px;
    height: 75px;
    border-radius: 25px;
    background-color: #4169e1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #00f7ff;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Vazir';
  }
`
const Inpotbox = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  input {
    width: 90%;
    height: 40px;
    margin-bottom: 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    color: #333;
    font-family: 'Vazir';
  }
`
const Single = styled.div`
  width: 50px;
  height: 50px;
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
    width: 60px;
    height: 60px;
    box-shadow: 2px 2px 2px 2px #eee;
    @media (max-width: 850px) {
    }
  }
  @media (max-width: 850px) {
    width: 40px;
    height: 40px;
    margin-left: 8px;
    margin-right: 8px;
    :hover {
      width: 50px;
      height: 50px;
    }
  }
`
