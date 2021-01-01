import React from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal";

import Hero from "../components/hero"
import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"
import Socials from "../components/socials";

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
            subtleSuffix
          }
          rawMarkdownBody
        }
      }
    },
    projects: allProjectsJson {
          edges {
            node {
              title
              description
              tech
              status
              source
              demo
            }
        }
    }
  }
`

const IndexPage = ({ data }) => (
  <Fade triggerOnce>
    <Layout>
      <SEO title="Home" />
      <Hero content={data.hero.edges[0].node} />
      <Socials />
      <Projects projectsData={data.projects.edges.map(project => { return { ...project.node } })} />
    </Layout>
  </Fade> 
)

export default IndexPage
