import type { NextPage } from 'next'
import Menu from '../components/home/Menu'
import HomeButton from '../components/HomeButton'
import MainLayout from '../components/MainLayout'
import Skills from '../components/skills/Skills'
import Works from '../components/works/Works'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <MainLayout>
      <Skills />
    </MainLayout>
  )
}

export default Home
