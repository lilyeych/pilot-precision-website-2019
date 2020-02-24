import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './styles/applications.module.scss'

const defaultNodeRenderers = {
  [BLOCKS.UL_LIST]: (node, next) => <ul>{next(node.content)}</ul>
};

export default ({ data }) => {
  return (
    <div id="applications" className={`section-deco container ${styles.applications}`}>
      <h1 class="headline">{data.headline}</h1>
      <div class={styles.content}>
        {documentToReactComponents(data.copy.json, defaultNodeRenderers)}
      </div>
      <div class={styles.img}>
          <img src={data.images.file.url} alt="" />
      </div>
    </div>
  );
}
