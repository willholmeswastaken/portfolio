import React from 'react';
import { graphql } from 'gatsby';

import Hero from '../components/hero';
import Socials from '../components/socials';
import Container from '../components/container';

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
    }
  }
`;


const Index = ({ data }) => (
  <Container pageTitle="Home">
    <Hero content={data.hero.edges[0].node} />
    <Socials />
  </Container>
);

export default Index;
