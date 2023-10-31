import React from "react";
import Winwheel from "winwheel";

export default () => {
  React.useEffect(() => {
    const theWheel = new Winwheel({
      canvasId: "canva",
      numSegments: 4,
      outerRadius: 170,
      segments: [
        { fillStyle: "#eae56f", text: "Prize One" },
        { fillStyle: "#89f26e", text: "Prize Two" },
        { fillStyle: "#7de6ef", text: "Prize Three" },
        { fillStyle: "#e7706f", text: "Prize Four" }
      ],
      // Note animation properties passed in constructor parameters.
      animation: {
        type: "spinToStop", // Type of animation.
        duration: 5, // How long the animation is to take in seconds.
        spins: 8 // The number of complete 360 degree rotations the wheel is to do.
      }
    });

    console.log(theWheel);
  }, []);

  function alertPrize(indicatedSegment) {
    // Do basic alert of the segment text.
    alert("You have won " + indicatedSegment.text);
  }

  return (
    <div>
      <canvas id="canva" width="880" height="500"></canvas>
      <button>Spin the Wheel</button>
    </div>
  );
};
