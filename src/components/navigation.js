import React from 'react'
import { Link } from 'gatsby'
import styles from './styles/navigation.module.scss'
import logoImg from '../images/logo.svg';
import instagram from '../images/instagram.png';

export default () => (
  <div className={`container ${styles.navigation}`}>
    <nav role="navigation">
      <img className={styles.navigationItem, styles.logo} src={logoImg} alt="Pilot Precision Logo" />
      <ul className={styles.navigationItems}>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#equipment">Equipment and Capabilities</Link>
        </li>
        <li>
          <Link to="#applications">Applications</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
        <li className={`${styles.iconInsta}`}>
          <Link to="/blog/">
            <img src={instagram} alt="Instagram icon" />
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)
