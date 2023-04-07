import React from "react";

const Stats = () => {
  return (
    <div className="d-flex justify-content-center stats-card">
      <div class="card col-9 p-2 border border-white shadow bg-success">
        <h3
          class="text-white text-capitalize font-weight-bold text-center m-3"
        >
          Impacts
        </h3>
        <div
          className="d-flex justify-content-around"
        >
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-white">7</h1>
            <p className="text-white">Activities</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-white">5</h1>
            <p className="text-white">Partners</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-white">1</h1>
            <p className="text-white">Year</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-white">80k+</h1>
            <p className="text-white">People Impacted</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
