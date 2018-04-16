import React from "react";

const GameEndingScreen = () => (
  <div className="gamePlayer">
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
export default GameEndingScreen;
