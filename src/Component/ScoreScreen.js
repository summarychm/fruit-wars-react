import React from "react";

// 计分板面板
const ScoreScreen = () => {
  return (
    <div className="gamePlayer scoreScreen">
      <img src={require("../images/icons/sound.png")} alt="" />
      <img src={require("../images/icons/prev.png")} alt="" />
      <span className="score">Score:0</span>
    </div>
  );
};

export default ScoreScreen;
