// pages/index.jsx
import Head from 'next/head'
import styles from './Home.module.css'
import AboutMe from './AboutMe'
import Habilidades from './Habilidades'
import Projetos from './Projetos'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Suassuna da Fonte | Portfólio</title>
        <meta name="description" content="Portfólio de Daniel Suassuna da Fonte - Ciência da Computação, Machine Learning, Deep Learning e IA" />
      </Head>

      <main className={styles.main}>
        
        <div className={styles.forma}>
        <div className={styles.container}>
          <h1 className={styles.title}>Daniel Suassuna da Fonte</h1>
          <h2 className={styles.subtitle}>Estudante de Ciência da Computação</h2>
          <p className={styles.description}>
            Apaixonado por <strong>Machine Learning</strong>, <strong>Deep Learning</strong> e <strong>Inteligência Artificial</strong>.
          </p>
            
          <div className={styles.contactInfo}>
            <p><strong>GitHub:</strong> github.com/danielsuassuna04</p>
            <p><strong>Email:</strong> danielsuassuna05@gmail.com</p>
            <Link href="./forca">
          <button className={styles.forca}>Jogo da forca</button>
        </Link>
          </div>
        </div>
        <AboutMe/>
        <Habilidades/>
        <Projetos/>
        </div>
      </main>
    </>
  )
}
