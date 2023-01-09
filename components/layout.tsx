import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Menu, Sidebar } from 'components/Index'

interface Props {
  children?: any
  title: string
}

export const Layout = ({ children, title }: Props): JSX.Element => {
  const [change, setChange] = useState<'desktop' | 'phone'>('desktop')

  const handleclick = () => {
    if (change == 'desktop') {
      setChange('phone')
    } else {
      setChange('desktop')
    }
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Menuu
          onClick={() => {
            handleclick()
          }}
        >
          <Menu />
        </Menuu>
        <Sidebar change={change}></Sidebar>
        <MainContent>{children}</MainContent>
      </Container>
    </div>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f7f7;
`
const MainContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Menuu = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 5px;
  right: 5px;
  display: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
