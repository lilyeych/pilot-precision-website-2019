import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './hero.module.css'

const defaultNodeRenderers = {
  [BLOCKS.UL_LIST]: (node, next) => <ul>{next(node.content)}</ul>
};

export default ({ header, copy, img }) => {
  console.log(img);
  return (
    <div>
      <h1>{header}</h1>
      <div>
          <img src={img} alt="" />
      </div>
      <div>
        {documentToReactComponents(copy, defaultNodeRenderers)}
      </div>
      
    </div>
  );
}
