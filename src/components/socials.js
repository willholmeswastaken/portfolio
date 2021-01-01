import React from 'react';
import styled from 'styled-components';
import Icon from './icon';

const StyledSocials = styled.div`
    display: flex;
    margin-left:8px;
    img {
        cursor:pointer;
    }
`;

const Socials = () => (
  <>
    <h2>Socials</h2>
    <StyledSocials>
      <>
        <a href="https://dev.to/willholmeswastaken">
          <Icon alt="blog" src="/dev-to.svg" />
        </a>
      </>
    </StyledSocials>
  </>
);

export default Socials;
