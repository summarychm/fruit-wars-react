import React from "react";
import styled from "styled-components";

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
export default GameEndingScreen;
