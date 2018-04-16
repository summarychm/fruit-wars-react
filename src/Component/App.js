import React from "react";
import styled from "styled-components";

import Canvas from "./Canvas";
import ScoreScreen from "./ScoreScreen";
import GameStartScreen from "./GameStartScreen";
import LevelSelectScreen from "./LevelSelectScreen";
import LoadingScreen from "./LoadingScreen";
import GameEndingScreen from "./GameEndingScreen";

export default class App extends React.Component {
  render() {
    return (
      <div className="gameContainer">
        <Canvas primary />
        {/* 计分板 ScoreScreen */}
        <ScoreScreen />
        {/* 开始菜单 GameStartScreen */}
        <GameStartScreen />
        {/* 关卡选择 LevelSelectScreen */}
        <LevelSelectScreen />
        {/* 加载画面 LoadingScreen */}
        <LoadingScreen />
        {/* 结束画面 GameEndingScreen */}
        <GameEndingScreen />
      </div>
    );
  }
}
