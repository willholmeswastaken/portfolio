import React from 'react';
import { graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';

import Layout from '../components/layout';
import Projects from '../components/projects';
import SEO from '../components/seo';

export const pageQuery = graphql`
  {
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
`;

const IndexPage = ({ data }) => (
  <Fade triggerOnce>
    <Layout>
      <SEO title="Projects" />
      <Projects projectsData={data.projects.edges.map((project) => ({ ...project.node }))} />
    </Layout>
  </Fade>
);

export default IndexPage;
