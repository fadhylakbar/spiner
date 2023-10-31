import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "Mulyadi. S" },
  { option: "Muslem" },
  { option: "Zamzami Razali" },
  { option: "Ibrahim Ahmad" },
];

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(2);

  const handleSpinClick = () => {
    setPrizeNumber(2);
    setMustSpin(true);
  };

  return (
    <div style={{display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", backgroundColors : "red", gap : "20px", padding : "20px 0"}}>
      <span style={{fontSize : "14px", fontWeight : "bold"}}>
        Undian Pembangunan Tempat Wudhu Gampong Lam Isek
      </span>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        spinDuration={[0.40]}
        data={data}
        outerBorderColor={["#f2f2f2"]}
        outerBorderWidth={[0]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["#dedede"]}
        radiusLineWidth={[1]}
        fontSize={15}
        textColors={["#ffffff"]}
        backgroundColors={[
          "#F22B35",
          "#F99533",
          "#24CA69",
          "#514E50",
          "#46AEFF",
          "#9145B7"
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
          console.log(data[prizeNumber]);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </div>
  );
};
