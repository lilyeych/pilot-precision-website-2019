import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './hero.module.css'

export default ({ data }) => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${data.heroImage.file.url})` }}>
      {documentToReactComponents(data.heroCopy.json)}
    </div>
  );
}
