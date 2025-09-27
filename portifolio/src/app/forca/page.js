"use client";

import React, { useState, useEffect } from 'react';
import styles from './forca.module.css';
import Link from 'next/link';

const palavras = ['javascript', 'computador', 'programacao', 'inteligencia', 'algoritmo', 'histopatologia'];

const Forca = () => {
  const [palavra, setPalavra] = useState('');
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [jogoEncerrado, setJogoEncerrado] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState('');

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  const iniciarNovoJogo = () => {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavraAleatoria);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setTentativasRestantes(6);
    setJogoEncerrado(false);
    setMensagemFinal('');
  };

  const handleTecla = (e) => {
    const letra = e.key.toLowerCase();
    if (jogoEncerrado || !letra.match(/[a-z]/i)) return;

    if (palavra.includes(letra)) {
      if (!letrasCorretas.includes(letra)) {
        setLetrasCorretas([...letrasCorretas, letra]);
      }
    } else {
      if (!letrasErradas.includes(letra)) {
        setLetrasErradas([...letrasErradas, letra]);
        setTentativasRestantes((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleTecla);
    return () => {
      document.removeEventListener('keydown', handleTecla);
    };
  });

  useEffect(() => {
  if (!palavra) return; // Aguarda a palavra ser definida

  const palavraCompleta = palavra.split('').every((letra) => letrasCorretas.includes(letra));

  if (palavraCompleta) {
    setMensagemFinal('🎉 Parabéns! Você venceu!');
    setJogoEncerrado(true);
  }

  if (tentativasRestantes === 0) {
    setMensagemFinal(`💀 Você perdeu! A palavra era "${palavra}".`);
    setJogoEncerrado(true);
  }
}, [letrasCorretas, letrasErradas, tentativasRestantes, palavra]);

  const renderPalavra = () => {
    return palavra.split('').map((letra, index) => (
      <span key={index} className={styles.letraPalavra}>
        {letrasCorretas.includes(letra) ? letra.toUpperCase() : ''}
      </span>
    ));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>🪓 Jogo da Forca</h1>
      <p className={styles.instrucao}>Digite letras no teclado para adivinhar a palavra.</p>

      <div className={styles.palavraContainer}>{renderPalavra()}</div>

      <p className={styles.status}>
        <strong>Erros:</strong>{' '}
        <span className={styles.erros}>{letrasErradas.join(', ').toUpperCase() || '-'}</span>
      </p>

      <p className={styles.status}>
        <strong>Tentativas restantes:</strong>{' '}
        <span className={styles.tentativas}>{tentativasRestantes}</span>
      </p>

      {mensagemFinal && (
        <div
          className={`${styles.mensagemFinal} ${
            mensagemFinal.includes('Parabéns') ? styles.vitoria : styles.derrota
          }`}
        >
          {mensagemFinal}
        </div>
      )}

      {jogoEncerrado && (
        <button onClick={iniciarNovoJogo} className={styles.botao}>
          🔁 Jogar novamente
        </button>
        
      )}
      <Link href="./">
          <button className={styles.botaoVoltar}>Voltar</button>
        </Link>
    </div>
  );
};

export default Forca;
