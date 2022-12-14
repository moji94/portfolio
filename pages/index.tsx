import React from 'react'
import {
  Layout,
  Top,
  AboutMe,
  Skill,
  Contacts,
  Footer,
  Projects,
} from '@components'

export default function Home() {
  return (
    <Layout title="My Portfolio">
      <Top />
      <AboutMe />
      <Skill />
      <Projects />
      <Contacts />
      <Footer />
    </Layout>
  )
}
