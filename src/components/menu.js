import React from 'react'
import styled from 'styled-components';
import { elastic as ReactMenu } from 'react-burger-menu';
import { Link } from 'gatsby';

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '16px',
        top: '30px'
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
        fill: 'black',
        width: '100%'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'block',
        marginBottom: 20
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};

const BurgerMenuItem = styled(Link)`
    color:white;
  `;

const Menu = () => (
    <ReactMenu
        id={'current-menu'}
        pageWrapId={'site-layout'}
        outerContainerId={'outer-container'}
        styles={styles}
        right
    >
        <BurgerMenuItem to="/" aria-label="home">
            Home
      </BurgerMenuItem>
        <BurgerMenuItem to="/projects" aria-label="projects">
            Projects
      </BurgerMenuItem>
    </ReactMenu>
);

export default Menu;