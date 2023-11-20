// import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Hello, {`I'm`} <a className={styles.link} href="https://github.com/Alexander-2049" target='_blank'>Alexander</a>!
      </h1>
    </main>
  )
}
