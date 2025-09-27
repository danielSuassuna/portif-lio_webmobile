// components/HabilidadeCard.jsx
import styles from '../../styles/HabilidadeCard.module.css'

export default function HabilidadeCard({ nome, descricao, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.image} />
      <h3 className={styles.title}>{nome}</h3>
      <p className={styles.description}>{descricao}</p>
    </div>
  )
}
