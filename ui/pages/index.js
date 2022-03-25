import Head from 'next/head'
import Header from '../components/Header'
import JobContainer from '../components/JobContainer'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Find a Guide</title>
        <meta name='description' content='Find a guide for your climbing adventure' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <JobContainer />
    </div>
  )
}
