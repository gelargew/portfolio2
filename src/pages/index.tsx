import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/home/Menu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main>
      <h1>Gelar Rustiawan</h1>
      <Menu />
      <Biograph />
    </main>
  )
}

const Biograph = () => {

  return (
    <section className={styles.biograph} >
      I believe that the web can be more diverse, beautiful and yet accesible.
      pursuing the infinite posibilities of design, making it through experiments and thoughts.
    </section>
  )
}


export default Home


