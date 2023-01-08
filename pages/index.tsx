import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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

export const getStaticProps = async ({ locale = 'fa' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
