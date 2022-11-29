import React from 'react'
import { Layout, Top, AboutMe, Skill, Contacts, Footer } from '@components'

export default function Home() {
  return (
    <Layout title="My Portfolio">
      <Top />
      <AboutMe />
      <Skill />
      <Contacts />
      <Footer />
    </Layout>
  )
}
