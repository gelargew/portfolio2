import type { NextPage } from 'next'
import Menu from '../components/home/Menu'
import HomeButton from '../components/HomeButton'
import MainLayout from '../components/MainLayout'
import Works from '../components/works/Works'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <MainLayout>
      <Works />
      <HomeButton />
    </MainLayout>
  )
}

export default Home
