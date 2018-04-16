import React from 'react';
import styled from 'styled-components';

const Canvas = styled("canvas").attrs({
    width: 300,
    height: 200
  })`
    border: 1px solid red;
    background-color: ${props => (props.primary ? "pink" : "red")};
  `;

  export default Canvas;
