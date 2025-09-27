// components/AboutMe.jsx
import styles from '../../styles/AboutMe.module.css'

export default function AboutMe() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>Sobre Mim</h2>
      <p className={styles.text}>
        Minha jornada começou no esporte. Após anos me dedicando ao basquete com a intenção de seguir carreira profissional, decidi mudar de rumo e iniciei o curso de Administração. No entanto, percebi que aquela área não refletia minha verdadeira paixão.
      </p>
      <p className={styles.text}>
        Foi durante um estágio, ainda na Administração, que tive meu primeiro contato com a programação. Esse momento foi um divisor de águas: descobri uma afinidade natural com a tecnologia e uma curiosidade crescente em entender como as coisas funcionavam por trás dos sistemas. Pouco tempo depois, tomei a decisão de mudar de curso e comecei a graduação em Ciência da Computação.
      </p>
      <p className={styles.text}>
        Ao longo da faculdade, fui incentivado por professores e colegas a explorar o universo da inteligência artificial. Com esse apoio, tive a oportunidade de participar da <strong>Latin America Conference on Computational Intelligence (LA-CCI)</strong>, onde me encantei profundamente pelo campo de <strong>Machine Learning</strong> e <strong>Deep Learning</strong>.
      </p>
      <p className={styles.text}>
        Desde então, dedico meus estudos e projetos à área, buscando entender os fundamentos teóricos e aplicá-los em soluções práticas. Sou movido pela curiosidade, pela vontade de aprender continuamente e pelo impacto transformador que a inteligência artificial pode trazer para a sociedade.
      </p>
    </section>
  )
}
