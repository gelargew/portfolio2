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
      <button onClick={() => setCamPos({position:{x:0, y:0, z:200}, target: {x:0, y:0, z: -200}})} > HELLO</button>
      <button onClick={() => setCamPos({position: {x:0, y:0, z:5}})} > HELLO1</button>
    </MainLayout>
  )
}

export default Home
