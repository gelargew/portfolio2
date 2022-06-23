import { useAtom } from 'jotai'
import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import Projects from '../components/projects/Projects'
import { cameraPosition, setCameraProps } from '../store/ThreeState'






const Home: NextPage = () => {
  const [p,setCamPos] = useAtom(setCameraProps)

  return (
    <MainLayout>
      <Projects />
    </MainLayout>
  )
}

export default Home
