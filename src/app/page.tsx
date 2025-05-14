'use client';

import React from "react";
import LiveMatch from "./components/LiveMatch";
import PointsTable from "./components/PointsTable";
import Schedule from "./components/Schedule";
import './styles/globals.css';

const HomePage = () => {
  return (
    <div className="card">
      <h1>IPL T20 Dashboard</h1>
      <LiveMatch />
      <PointsTable />
      <Schedule />
    </div>
  );
};

export default HomePage;
