import type { NextPage } from 'next'
import HomeButton from '../components/HomeButton'
import Works from '../components/works/Works'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <h1>Gelar Rustiawan</h1>
      <Works />

      <HomeButton />
    </div>
  )
}

export default Home
