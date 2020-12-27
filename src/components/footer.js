import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
`

const Footer = () => (
  <StyledFooter>
    <a
      href="https://github.com/willholmeswastaken"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >
      Made with <span role="img" aria-label="emoji">❤️</span> by Will Holmes <br />
      Built on GatsbyJs. <br />
      <span role="img" aria-label="emoji">👏</span> Visit my GitHub
    </a>
  </StyledFooter>
)

export default Footer