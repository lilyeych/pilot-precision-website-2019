import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './styles/about.module.scss'

export default ({ data }) => {
  return (
    <div id="about" className={`section-deco container ${styles.about}`}>
      <h1 class="headline">{data.headline}</h1>
      <div>
        {documentToReactComponents(data.copy1.json)}
      </div>
      <div className="img-container">
        {data.images.map(({ id, file }) => {
          return (
            <img key={id} src={file.url} alt="" />
          )
        })}
      </div>
      <div>
        {documentToReactComponents(data.copy2.json)}
      </div>
    </div>
  );
}
