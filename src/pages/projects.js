import React from 'react';
import { graphql } from 'gatsby';

import Projects from '../components/projects';
import SEO from '../components/seo';
import Container from '../components/container';

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
  <Container pageTitle="Projects">
    <SEO title="Projects" />
    <Projects projectsData={data.projects.edges.map((project) => ({ ...project.node }))} />
  </Container>
);

export default IndexPage;
