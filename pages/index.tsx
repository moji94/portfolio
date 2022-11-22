import React from 'react'
import { Layout, Top, AboutMe } from '@components'

export default function Home() {
  return (
    <Layout title="My Portfolio">
      <div>
        <Top />
        <AboutMe />
      </div>
    </Layout>
  )
}
