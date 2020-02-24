import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './styles/equipment.module.scss'

const defaultNodeRenderers = {
  [BLOCKS.UL_LIST]: (node, next) => <ul>{next(node.content)}</ul>
};

export default ({ data }) => {
  return (
    <div id="equipment" className={`section-deco container ${styles.equipment}`}>
      <h1 class="headline">{data.headline}</h1>
      {data.images.map(({ id, file }) => {
        return (
          <img key={id} src={file.url} alt="" />
        )
      })}
      <div>
        {documentToReactComponents(data.copy.json, defaultNodeRenderers)}
      </div>
    </div>
  );
}
