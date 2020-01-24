import React from 'react'
import Img from 'gatsby-image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './hero.module.css'

export default ({ data }) => {
  console.log("data",data);
  return (
    <div>
      <h1>{data.headline}</h1>
      <div>
        <img src={data.contactMap.file.url} alt="" />
      </div>

      <div>
        <p>{data.contact1Email}</p>
        <p>{data.contact1Name}</p>
        <p>{data.contact1PhoneNumber}</p>
        <p>{data.contact2Name}</p>
        <p>{data.contact2Title}</p>
        <p>{data.contact2Email}</p>
        <p>{data.contact2PhoneNumber}</p>
        <p>{data.address}</p>
        <p>{data.website}</p>
        <p>{data.copyRight}</p>
      </div>
    </div>
  );
}
