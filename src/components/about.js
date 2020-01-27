import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './hero.module.css'

export default ({ data }) => {
  return (
    <div>
      <h1>{data.headline}</h1>
      <div>
        {documentToReactComponents(data.copy1.json)}
      </div>
      <div>
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
