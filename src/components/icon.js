import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
  display: block;
  margin: ${(props) => (props.margin ? props.margin : '0 auto 5px auto')};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: ${(props) => (props.clickable ? 'pointer' : 'auto')};
`;

const Icon = ({
  margin, src, height, width, clickable, clicked, alt,
}) => (
  <StyledIcon
    margin={margin}
    src={src}
    height={height}
    width={width}
    clickable={clickable}
    onClick={clicked}
    alt={alt}
  />
);

export default Icon;
