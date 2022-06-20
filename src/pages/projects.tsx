import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import Projects from '../components/projects/Projects'






const Home: NextPage = () => {
  return (
    <MainLayout>
      <Projects />
    </MainLayout>
  )
}

export default Home
