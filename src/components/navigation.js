import React from 'react'
import { Link } from 'gatsby'
import styles from './styles/navigation.module.scss'
import logoImg from '../images/logo.svg';
import instagram from '../images/instagram.png';

export default () => (
  <nav role="navigation" className={styles.navigation}>
    <ul className="container">
      <li className={styles.navigationItem, styles.logo}>
        <img src={logoImg} alt="Pilot Precision Logo" />
      </li>
      <li className={styles.navigationItem}>
        <Link to="#about">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="#equipment">Equipment and Capabilities</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="#applications">Applications</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="#contact">Contact</Link>
      </li>
      <li className={styles.navigationItem, styles.iconInsta}>
        <Link to="/blog/">
          <img src={instagram} alt="Instagram icon" />
        </Link>
      </li>
    </ul>
  </nav>
)
