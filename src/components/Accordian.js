import React, { useState } from "react";
// import "./Accordian.css";
import { quesData } from "./quesData";
import Acc from "./Acc";

const Accordian = () => {
  const [data, setData] = useState(quesData);
  return (
    <>
      <div className="main-div">
        <div className="main-heading">
          <h1>React Question Bank</h1>
        </div>
        <div className="main-content">
          {data.map((currentData) => {
            return <Acc key={currentData.id} {...currentData} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordian;
