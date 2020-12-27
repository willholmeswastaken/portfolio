import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Projects from "../components/projects"

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
  <Layout>
    <SEO title="hello@willholmes.dev" />
    <Hero content={data.hero.edges[0].node} />
    <Projects projectsData={data.projects.edges.map(project => { return { ...project.node } })} />
  </Layout>
)

export default IndexPage
