import React from 'react';
import { graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import { scaleRotate as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Socials from '../components/socials';

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

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'black',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const BurgerMenuItem = styled(Link)`
  color:white;
`;

const Index = ({ data }) => (
  <div id="outer-container" style={{ height: '100%' }}>
    <Menu
      id={'current-menu'}
      pageWrapId={'site-layout'}
      outerContainerId={'outer-container'}
      styles={styles}
    >
      <BurgerMenuItem to="/" aria-label="home">
        Home
      </BurgerMenuItem>
      <BurgerMenuItem to="/projects" aria-label="projects">
        Projects
      </BurgerMenuItem>
    </Menu>
    <Fade triggerOnce={true}>
      <Layout id="site-layout">
        <SEO title="Home" />
        <Hero content={data.hero.edges[0].node} />
        <Socials />
      </Layout>
    </Fade>
  </div>
);

export default Index;
