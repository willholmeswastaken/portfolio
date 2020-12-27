import React from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
import { SocialIcon } from 'react-social-icons';

import { shadow } from '../styles/utils/shadow.js';
import Icon from './icon.js';

const StyledProjectCard = styled.div`
  max-width: 300px;
  height: 350px;
  background: white;
  margin: 25px;
  border-radius: 2px;
  padding-top:5px;
  ${shadow};
  > h2 {
    padding: 15px;
  }
  margin-left:8px;
  transition: all .2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const StyledDescription = styled.p`
  padding: 10px;
  padding-bottom:0px;
  color: #555;
  text-align: center;
`;
const StyledLiveLink = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ccc;
  text-decoration: none;
  transition:all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: red;
    cursor: pointer;
    transition:color 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self:flex-end;
  justify-content: center;
  a {
    margin: 10px;
    margin: 5px;
    background:none;
    margin-right:5px;
    opacity:0.8;
    transition: all 0.4s ease 0s;
    &:hover{
      transition: all 0.4s ease 0s;
        transform:scale(1.1);
        opacity:1;
    }
  }
  img {
    margin: 10px;
  }
`;

const Header = styled.h3`
  padding: 0px !important;
  padding-left: 5px;
  margin: 20px !important;
  text-align: center;
  `;

const Project = ({ project }) => {
    const { title, description, status, source, demo, tech } = project
    return (
        <Fade triggerOnce>
            <StyledProjectCard>
                <Header>{title}</Header>
                <Wrapper>{tech.map(t => <Icon src={`/${t}.svg`} />)}</Wrapper>
                <StyledDescription>{description}</StyledDescription>
                <Wrapper>
                    {source && source.length > 0 && (
                        <SocialIcon url={source} />
                    )}
                    {status && status.length > 0 && (
                        <StyledLiveLink href={demo} target="_blank">
                            {status}
                        </StyledLiveLink>
                    )}
                </Wrapper>
            </StyledProjectCard>
        </Fade>
    );
};

export default Project
