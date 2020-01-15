import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import styles from './hero.module.css'




export default ({ data }) => {
  return (
    <div className={styles.hero}>
      {documentToReactComponents(data)}
    </div>
  );

  }
