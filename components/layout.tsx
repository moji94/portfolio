import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { SideBar } from '@components'

interface Props {
  children?: any
  title: string
}

export const Layout = ({ children, title }: Props): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <SideBar />
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
