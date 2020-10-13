import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>index Page </h3>
    </div>
  )
}
