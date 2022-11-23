import React from 'react'
import { Layout, Top, AboutMe, Skill } from '@components'

export default function Home() {
  return (
    <Layout title="My Portfolio">
      <Top />
      <AboutMe />
      <Skill />
    </Layout>
  )
}
