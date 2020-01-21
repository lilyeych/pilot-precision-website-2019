import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Hero from '../components/hero'
import About from '../components/about'
import Equipment from '../components/equipment'
import Applications from '../components/applications'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const heroCopy = get(this, 'props.data.allContentfulHero.nodes[0].heroCopy.json')
    const heroImg = get(this, 'props.data.allContentfulHero.nodes[0].heroImage.file.url')

    const aboutHeader = get(this, 'props.data.allContentfulAboutUs.nodes[0].headline')
    const aboutCopy1 = get(this, 'props.data.allContentfulAboutUs.nodes[0].copy1.json')
    const aboutCopy2 = get(this, 'props.data.allContentfulAboutUs.nodes[0].copy2.json')
    const aboutImgs = get(this, 'props.data.allContentfulAboutUs.nodes[0].images')

    const equipHeader = get(this, 'props.data.allContentfulEquipmentAndCapabilities.nodes[0].headline')
    const equipCopy = get(this, 'props.data.allContentfulEquipmentAndCapabilities.nodes[0].copy.json')
    const equipImgs = get(this, 'props.data.allContentfulEquipmentAndCapabilities.nodes[0].images')

    const appHeader = get(this, 'props.data.allContentfulApplications.nodes[0].headline')
    const appCopy = get(this, 'props.data.allContentfulApplications.nodes[0].copy.json')
    const appImg = get(this, 'props.data.allContentfulApplications.nodes[0].images.file.url')

    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />

          <Hero copy={heroCopy} img={heroImg} />
          <About header={aboutHeader} copy1={aboutCopy1} copy2={aboutCopy2}  imgs={aboutImgs}/>
          <Equipment header={equipHeader} copy={equipCopy} imgs={equipImgs}/>
          <Applications header={appHeader} copy={appCopy} img={appImg}/>

          <div className="wrapper">
            <h2 className="section-headline">Recent articlesss</h2>


            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulHero {
      nodes {
        heroCopy {
          json
        }
        heroImage {
          file {
            url
          }
        }
      }
    }
    allContentfulAboutUs {
      nodes {
        copy1 {
          json
        }
        copy2 {
          json
        }
        images {
          file {
            url
          }
          id
        }
        headline
      }
    }

    allContentfulEquipmentAndCapabilities {
      nodes {
        images {
          id
          file {
            url
          }
        }
        copy {
          json
        }
        headline
      }
    }

    allContentfulApplications {
      nodes {
        copy {
          json
        }
        images {
          file {
            url
          }
        }
        headline
      }
    }

    allContentfulContact {
      nodes {
        headline
        contactMap {
          file {
            url
          }
        }
        contact1Email
        contact1Title
        contact1Name
        contact1PhoneNumber
        contact2Name
        contact2Title
        contact2Email
        contact2PhoneNumber
        address
        website
        copyRight
      }
    }

    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
