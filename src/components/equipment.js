import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './styles/equipment.module.scss'

const defaultNodeRenderers = {
  [BLOCKS.UL_LIST]: (node, next) => <ul>{next(node.content)}</ul>
};

export default ({ data }) => {
  return (
    <div id="equipment" className={`section-deco ${styles.equipment}`}>
      <div class="container">
      <h1 class="headline">{data.headline}</h1>
        <div className="img-container">
          {data.images.map(({ id, file }) => {
            return (
              <img key={id} src={file.url} alt="" />
            )
          })}
        </div>
        <div>
          {documentToReactComponents(data.copy.json, defaultNodeRenderers)}
        </div>
      </div>
    </div>
  );
}
