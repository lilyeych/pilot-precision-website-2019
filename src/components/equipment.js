import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const defaultNodeRenderers = {
  [BLOCKS.UL_LIST]: (node, next) => <ul>{next(node.content)}</ul>
};

export default ({ data }) => {
  return (
    <div id="equipment">
      <h1>{data.headline}</h1>
      <div>
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
  );
}
