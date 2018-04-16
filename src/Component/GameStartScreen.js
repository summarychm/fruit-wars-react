import React from 'react';
import styled from "styled-components";

// 开始菜单面板
const GameStartScreen = () => (
  <div className="gamePlayer gameStartScreen">
    <img src={require("../images/icons/play.png")} alt="Play" />
    <br />
    <img src={require("../images/icons/settings.png")} alt="Settings" />
  </div>
);

export default GameStartScreen;
