import React from 'react'

import styles from './MenuLink.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function MenuLink({children, local}) {
  const localizacao = useLocation();

  return (
    <Link 
      to={local} 
      className={`
        ${styles.link}
        ${ localizacao.pathname === local ? styles.link__destacado : ''}
      `}>
        {children}
    </Link>
  )
}
