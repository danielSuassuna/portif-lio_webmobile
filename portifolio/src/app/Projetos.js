import Head from 'next/head'
import styles from '../../styles/Projetos.module.css'
import { ProjetoCard } from './ProjetoCard'

export const projetos = [
  {
    imagem:"",
    nome: "Resnet-50 com a biblioteca keras.",
    descricao: "Criação da arquitetura de redes neurais convolucionais RESNET com 50 camadas utilizando a biblioteca keras.",
    link: "https://github.com/danielsuassuna04/Resnet50-with-keras",
  },
  {
    nome: "TransferLearning com keras",
    descricao: "Utilizando transfer learning para treinar um modelo pré-treinado no imagenet com a arquitetura RESNET com 152 camadas no dataset CIFAR-10",
    link: "https://github.com/danielsuassuna04/TransferLearning-keras",
  },
  {
    nome: "Histopathological Prediction",
    descricao: "projeto de classificação de imagens histopatológicas desenvolvido com a biblioteca FastAI, voltado para auxiliar no diagnóstico médico, especialmente na detecção de câncer em tecidos analisados por microscopia.",
    link: "https://github.com/danielsuassuna04/Histopathological_prediction",
  },
  {
    nome: "Criando uma rede neural do zero utilizando Numpy",
    descricao: "Aplicação completa de uma rede neural para classificações binárias utilizando apenas a biblioteca numpy",
    link: "https://github.com/danielsuassuna04/Neural-Network-Numpy",
  },
  {
    nome: "Face detection com YOLO",
    descricao: "Treinamento completo do algorítmo YOLO para face detection",
    link: "https://github.com/danielsuassuna04/YOLO_train_face_detection",
  },
  {
    nome: "Usando o algorítmo YOLO treinado para detecção de face",
    descricao: "Processo de uso do algorítmo YOLO para detecção de face completa",
    link: "https://github.com/danielsuassuna04/Face_detection_YOLO",
  }
]

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Projetos | Daniel Suassuna</title>
        <meta name="description" content="Projetos e repositórios de Daniel Suassuna no GitHub." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Meus Projetos</h1>

        <div className={styles.grid}>
          {projetos.map((projeto, index) => (
            <ProjetoCard
              key={index}
              nome={projeto.nome}
              descricao={projeto.descricao}
              link={projeto.link}
            />
          ))}
        </div>
      </main>
    </>
  )
}
