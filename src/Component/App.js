import React from "react";

import Canvas from "./Canvas";
import ScoreScreen from "./ScoreScreen";
import GameStartScreen from "./GameStartScreen";
import LevelSelectScreen from "./LevelSelectScreen";
import LoadingScreen from "./LoadingScreen";
import GameEndingScreen from "./GameEndingScreen";
import "../index.css";

export default class App extends React.Component {
  render() {
    return (
      <div
        className="gameContainer"
        style={{
          background: `url(${require("../images/splashscreen.png")})`
        }}
      >
        <Canvas />
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
// style={{ display: "block" }}
