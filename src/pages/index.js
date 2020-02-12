import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import get from 'lodash/get'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from '../components/hero'
import About from '../components/about'
import Equipment from '../components/equipment'
import Applications from '../components/applications'
import Contact from '../components/contact'

import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    
    const hero = get(this, 'props.data.allContentfulHero.nodes[0]')
    const about = get(this, 'props.data.allContentfulAboutUs.nodes[0]')
    const equip = get(this, 'props.data.allContentfulEquipmentAndCapabilities.nodes[0]')
    const app = get(this, 'props.data.allContentfulApplications.nodes[0]')
    const contact = get(this, 'props.data.allContentfulContact.nodes[0]')

    return (
      <Layout>
        <div>
          <Helmet title={siteTitle} />

          <Hero data={hero} />
          <About data={about} />
          <Equipment data={equip}/>
          <Applications data={app}/>
          <Contact data={contact} />
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
  }
`
