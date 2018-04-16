import React from 'react';
import styled from 'styled-components';

// 计分板面板
const screen = () => (
    <div>
      <img src={require("../images/icons/sound.png")} alt="" />
      <img src={require("../images/icons/prev.png")} alt="" />
      <span>Score:0</span>
    </div>
  );
  const ScoreScreen = styled(screen)``;

  export default ScoreScreen;