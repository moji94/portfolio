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
  height: 100vh;
`
const MainContent = styled.div`
  width: 100%;
  height: 100vh;
`
