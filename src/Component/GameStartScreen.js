import React from 'react';
import styled from "styled-components";

// 开始菜单面板
const startScreen = () => (
  <div>
    <img src={require("../images/icons/play.png")} alt="Play" />
    <img src={require("../images/icons/settings.png")} alt="Settings" />
  </div>
);
// 关卡选择
const GameStartScreen = styled(startScreen)``;
export default GameStartScreen;
