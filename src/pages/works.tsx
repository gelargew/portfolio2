import type { NextPage } from 'next'
import Menu from '../components/home/Menu'
import HomeButton from '../components/HomeButton'
import Works from '../components/works/Works'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <main>
      <h1>Gelar Rustiawan</h1>
      <Menu />
      <Works />

      <HomeButton />
    </main>
  )
}

export default Home
