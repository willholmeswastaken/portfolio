import React from 'react'
import styled from 'styled-components';

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

const Menu = () => (
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
);

export default Menu;