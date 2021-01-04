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


const Header = () => (
  <StyledHeader>
    <Link to="/" aria-label="home">
      <StyledLogo>wh.</StyledLogo>
    </Link>
  </StyledHeader>
);

export default Header;
