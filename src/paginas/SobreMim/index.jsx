import PostModelo from 'components/PostModelo'
import React from 'react'

import styles from './SobreMim.module.css';

import fotoCapa from 'assets/sobre_mim_capa.png'
import minhaFoto from 'assets/minha_foto.png'


export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>Olá, eu sou Vitor</h3>

      <img
        src={minhaFoto}
        alt="Foto do antonio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />
      
      <p className={styles.paragrafo}>Oi, tudo bem? Eu sou estudante/desenvolvedor Front-end e estou feliz em te ver por aqui.</p>
      <p className={styles.paragrafo}>Minha história com programação começou por mais ou menos em 2017 durante o ensino médio quando tive meu primeiro contato com visua basic e aprendi sobre a lógica de programação. </p>
      <p className={styles.paragrafo}>Depois, quando entrei para a Universidade de Mogi das Cruzes em 2019 no curso de Sistemas de Informação, comecei a estudar C# e essa foi a única linguagem de programação que estudei até o final do meu curso em 2022. Inclusive, foi a linguagem que usei para desenvolver meu TCC, um sistema de frente de caixa de autoatendimento.</p>
      <p className={styles.paragrafo}>Quando sai da faculdade percebi que durante todo aquele tempo eu não tinha aprendido nada sobre devolvimento web. Nada além de algumas tag mais simples que eu nem sabia o significado, então parei de estudar back-end e fui para o front-end. 
      Comecei com alguns vídeos de HTML e CSS e depois encontrei alguns cursos pela internet onde comecei a estudar JavaScript. Agora estudo através da Alura onde já fiz cursos de HTML, CSS, JavaScript, React e até mesmo alguns sobre UX Design (não é pra mim...) e ao mesmo tempo me para o mercado de trabalho como desenvolvedor Front-end</p>
      <p className={styles.paragrafo}>Ainda não tive a oportunidade de desenvolver fazendo parte de um time, colaborando em projetos para alguma empresa, mas estou me preparando para isso!</p>
    </PostModelo>
  )
}
