import React, { useState } from "react";
import "./Homepage.css";
const Homepage = () => {
  let value = 1;
  let prefix = 0;
  const [color, setColor] = useState("rgb(245, 206, 51)");
  const [data, setData] = useState(value);
  if (data <= 9) {
    prefix = 0;
  } else {
    prefix = null;
  }
  const colorchange = () => {
    setColor(
      color === "rgb(83, 248, 177" ? "rgb(245, 206, 51)" : "rgb(83, 248, 177"
    );
  };

  return (
    <div className="main">
      <div className="box">
        <div className="container">
          <div className="circle" style={{ backgroundColor: color }}>
            <h1>
              {prefix}
              {data}
            </h1>
            <span onClick={() => setData(data + 1)} className="btn1">
              Click to increase the counter
            </span>
          </div>
        </div>
        <button onClick={colorchange} className="btn">
          Change Color
        </button>
      </div>
    </div>
  );
};

export default Homepage;
