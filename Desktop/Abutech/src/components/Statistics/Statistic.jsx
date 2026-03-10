import React from "react";
import CountUp from "react-countup";
import "./statistic.css";

const Statistic = () => {
  return (
    <section>
      <div className="container">
        <div className="statistic-container">
          <div className="statistic-card">
            <div className="count">
              <CountUp start={0} end={40} duration={3} separator="," />
            </div>
            <span>+</span>
          </div>

          <div className="statistic-card">
            <div className="count">
              <CountUp start={0} end={10} duration={3} separator="," />
            </div>
            <span>+</span>
          </div>

          <div className="statistic-card">
            <div className="count">
              <CountUp start={0} end={30} duration={3} separator="," />
            </div>
            <span>+</span>
          </div>

          <div className="statistic-card">
            <div className="count">
              <CountUp start={0} end={1} duration={3} separator="," />
            </div>
            <span>+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;