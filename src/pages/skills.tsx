import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import Skills from '../components/skills/Skills'





const Home: NextPage = () => {
  return (
    <MainLayout>
      <Skills />
    </MainLayout>
  )
}

export default Home
