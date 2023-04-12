import React from 'react'

import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({children, tamanho}) {
  return (
    <button 
      className={`
        ${styles.bootaoPrincipal}
        ${styles[tamanho]}
      `}
    >
        {children}
    </button>
  )
}
