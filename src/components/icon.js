import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
  display: block;
  margin: ${props => (props.margin ? props.margin : '0 auto 5px auto')};
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: ${props => (props.clickable ? 'pointer' : 'auto')};
`;

const StyledSvgIcon = styled.img`
  display: block;
  margin: ${props => (props.margin ? props.margin : '0 auto 5px auto')};
  background-size: ${props => props.height} ${props => props.width};
  cursor: ${props => (props.clickable ? 'pointer' : 'auto')};
`;

const Icon = props => (
    props.src.includes('.svg')
        ?
        <StyledSvgIcon
            margin={props.margin}
            src={props.src}
            height={props.height}
            width={props.width}
            clickable={props.clickable}
            onClick={props.clicked}
        />
        :
        <StyledIcon
            margin={props.margin}
            src={props.src}
            height={props.height}
            width={props.width}
            clickable={props.clickable}
            onClick={props.clicked}
        />
)

export default Icon
