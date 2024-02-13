import React from "react";
import CounterSingle from "./CounterSingle";
import counterList from "./counter.json";
import "./counters.css";
function Counters() {
  return (
    <div className="counters">
      {counterList.map((res) => (
        <div className="counter-card">
          <p className="counter-prefix">{res.prefix}</p>
          <CounterSingle
            start={res.start}
            end={res.end}
            duration={res.duration}
          />
          <p className="counter-suffix">{res.suffix}</p>
        </div>
      ))}
    </div>
  );
}

export default Counters;
