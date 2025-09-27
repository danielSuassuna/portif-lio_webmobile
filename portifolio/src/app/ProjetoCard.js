import styles from '../../styles/ProjetoCard.module.css'

export  function ProjetoCard({nome, descricao, link}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{nome}</h3>
      <p className={styles.description}>{descricao}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Ver no GitHub →
      </a>
    </div>
  )
}
