import Head from 'next/head'
import HabilidadeCard from './HabilidadeCard' // não esqueça de importar
import styles from '../../styles/Habilidades.module.css'

const habilidades = [
  {
    nome: "Machine Learning",
    descricao: "Criação de modelos supervisionados e não supervisionados para análise de dados e previsões.",
    imagem: "/img/machine_learning.png",
  },
  {
    nome: "Deep Learning",
    descricao: "Modelagem de redes neurais profundas, incluindo CNNs e RNNs.",
    imagem: "/img/deep_learning.png",
  },
  {
    nome: "TensorFlow",
    descricao: "Framework para construção e treino de redes neurais escaláveis.",
    imagem: "/img/tensorflow.png",
  },
  {
    nome: "Scikit-learn",
    descricao: "Ferramentas para ML tradicional: regressão, classificação e clustering.",
    imagem: "/img/sklearn.png",
  },
  {
    nome: "",
    descricao: "Modelagem de séries temporais com técnicas de machine e deep learning.",
    imagem: "/img/darts.png",
  },
  {
    nome: "",
    descricao: "Biblioteca de alto nível construída sobre PyTorch que facilita o desenvolvimento rápido e eficiente de modelos de deep learning, com foco em acessibilidade, desempenho e melhores práticas.",
    imagem: "/img/fastapi.png",
  },
]

export default function Habilidades() {
  return (
    <>
      <Head>
        <title>Habilidades | Daniel Suassuna</title>
        <meta name="description" content="Habilidades e conhecimentos técnicos de Daniel Suassuna da Fonte." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Minhas Habilidades</h1>

        <div className={styles.grid}>
          {habilidades.map((item, index) => (
            <HabilidadeCard
              key={index}
              nome={item.nome}
              descricao={item.descricao}
              imagem={item.imagem}
            />
          ))}
        </div>
      </main>
    </>
  )
}
