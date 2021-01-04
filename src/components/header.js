import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  max-width: 67.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: black;
`;

const StyledNavItem = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
  &:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover&:after { 
    width: 100%; 
    left: 0; 
  }
`;

const Nav = styled.div`
  width:100%;
  display:flex;
  justify-content: flex-end;
`;




const Header = () => (
  <StyledHeader>
    <Link to="/" aria-label="home">
      <StyledLogo>wh.</StyledLogo>
    </Link>
    <Nav>
      <Link to="/projects" aria-label="projects">
        <StyledNavItem>Projects</StyledNavItem>
      </Link>
    </Nav>
  </StyledHeader>
);

export default Header;
