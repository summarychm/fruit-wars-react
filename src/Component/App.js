import React from "react";
import styled from "styled-components";

const Canvas = styled("canvas").attrs({
  width: 300,
  height: 200
})`
  border: 1px solid red;
  background-color: ${props => (props.primary ? "pink" : "red")};
`;

// 计分板面板
const screen = () => (
  <div>
    <img src={require("../images/icons/sound.png")} alt="" />
    <img src={require("../images/icons/prev.png")} alt="" />
    <span>Score:0</span>
  </div>
);
const ScoreScreen = styled(screen)``;

// 开始菜单面板
const startScreen = () => (
  <div>
    <img src={require("../images/icons/play.png")} alt="Play" />
    <img src={require("../images/icons/settings.png")} alt="Settings" />
  </div>
);
// 关卡选择
const GameStartScreen = styled(startScreen)``;

const levelSelect = () => <div />;
const LevelSelectScreen = styled(levelSelect)``;

const loading = () => (
  <div>
    <div>LoadingMessage</div>
  </div>
);
const LoadingScreen = styled(loading)``;
const gameEnd = () => (
  <div>
    <div>
      <p>The Level Is Over Message</p>
      <p>
        <img src={require("../images/icons/prev.png")} alt="" />
        Replay Current Level
      </p>
      <p>
        <img src={require("../images/icons/next.png")} alt="" />
        Play Next Level
      </p>
      <p>
        <img src={require("../images/icons/return.png")} alt="" />
        Return to Level Screen
      </p>
    </div>
  </div>
);
const GameEndingScreen = styled(gameEnd)``;

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
