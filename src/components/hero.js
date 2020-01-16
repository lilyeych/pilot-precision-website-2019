import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './hero.module.css'

export default ({ copy, img }) => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img})` }}>
      {documentToReactComponents(copy)}
    </div>
  );
}
