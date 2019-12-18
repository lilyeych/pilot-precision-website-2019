import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Background</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">equipment and capabilities</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Applications</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Contact</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Instagram</Link>
      </li>
    </ul>
  </nav>
)
