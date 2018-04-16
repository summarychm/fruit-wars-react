import React from "react";

const LoadingScreen = () => (
  <div className="gamePlayer loadingScreen">
    <div
      className="loadingMessage"
      style={{
        background: `url(${require("../images/loader.gif")}) no-repeat center`
      }}
    >
      LoadingMessage
    </div>
  </div>
);

export default LoadingScreen;
