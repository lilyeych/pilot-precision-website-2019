import React from 'react'
import Img from 'gatsby-image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './hero.module.css'

export default ({ header, copy1, copy2, imgs }) => {
  return (
    <div>
      <h1>{header}</h1>
      <div>
        {documentToReactComponents(copy1)}
      </div>
      <div>
        {imgs.map(({ id, file }) => {
          return (
            <img key={id} src={file.url} alt="" />
          )
        })}
      </div>
      <div>
        {documentToReactComponents(copy2)}
      </div>
    </div>
  );
}
