import { useState } from "react";

const lightColors = ["red", "yellow", "green"];

export const FunctionalTrafficLight = () => {
    const [lightColorIndex, setLightColorIndex] = useState(0);
    let lightColor = lightColors[lightColorIndex];

    if (lightColorIndex > lightColors.length - 1) {
        setLightColorIndex(0);
    }

    const nextState = () => {
        setLightColorIndex(lightColorIndex + 1);
    }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={"circle " + ("red"    === lightColor ? "red"    : "black")}></div>
        <div className={"circle " + ("yellow" === lightColor ? "yellow" : "black")}></div>
        <div className={"circle " + ("green"  === lightColor ? "green"  : "black")}></div>
      </div>
      <button onClick={nextState} className="next-state-button">Next State</button>
    </div>
  );
};



