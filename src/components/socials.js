import React from "react"
import styled from "styled-components"
import Icon from "./icon"

const StyledSocials = styled.div`
  display: flex;
  gap:20px;
  margin-left: 8px;
  img {
    cursor: pointer;
  }
`;
const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: black;
  display: block;
  cursor:pointer !important;
  margin: ${(props) => (props.margin ? props.margin : '5px auto 16px auto')};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: ${(props) => (props.clickable ? 'pointer' : 'auto')};
`;

const Socials = () => (
  <>
    <h2>Socials</h2>
    <StyledSocials>
      <>
        <a href="https://dev.to/willholmes">
          <Icon alt="blog" src="/dev-to.svg" />
          <b>&nbsp;Blog</b>
        </a>
        <a href="/projects">
          <StyledLogo>wh.</StyledLogo>
          <b>&nbsp;Projects</b>
        </a>
      </>
    </StyledSocials>
  </>
)

export default Socials
