import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navigation from './navigation'

import styles from './styles/hero.module.scss'

export default ({ data }) => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${data.heroImage.file.url})` }}>
      <Navigation />
      <div className="container">
        {documentToReactComponents(data.heroCopy.json)}
      </div>
    </div>
  );
}
