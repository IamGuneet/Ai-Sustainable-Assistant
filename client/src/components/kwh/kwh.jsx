import React, { useState } from 'react';
import "./kwh.css"
const EnergyCalculator = () => {
  const [totalArea, setTotalArea] = useState('');
  const [numberOfResidents, setNumberOfResidents] = useState('');
  const [energyUsage, setEnergyUsage] = useState('');
  const [efficiencyScore, setEfficiencyScore] = useState(null);

  const calculateEfficiency = () => {
    const area = parseFloat(totalArea);
    const residents = parseInt(numberOfResidents, 10);
    const monthlyUsage = parseFloat(energyUsage);

    if (isNaN(area) || isNaN(residents) || isNaN(monthlyUsage)) {
      alert('Please enter valid numbers for all fields');
      return;
    }

    // Constants for average energy usage factors (for demonstration purposes)
    const averageEnergyUsagePerSquareFoot = 10; // kWh per square foot annually
    const averageEnergyUsagePerResident = 300; // kWh per resident per month

    // Calculate annual energy usage based on area and residents
    const annualUsage = area * averageEnergyUsagePerSquareFoot;

    // Calculate normalized monthly energy usage per resident
    const normalizedMonthlyUsage = monthlyUsage / residents;

    // Calculate efficiency score as a percentage
    const efficiencyScore = ((annualUsage / 12) - normalizedMonthlyUsage) / (annualUsage / 12) * 100;

    // Set the efficiency score in state
    setEfficiencyScore(efficiencyScore.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">House Energy Efficiency Calculator</h2>
        <div className='ic'>

      <div className="mb-3">
        <label htmlFor="area" className="form-label">Total Area (square feet):</label>
        <input
          type="number"
          id="area"
          className="form-control i"
          value={totalArea}
          onChange={(e) => setTotalArea(e.target.value)}
          placeholder="Enter total area"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="residents" className="form-label">Number of Residents:</label>
        <input
          type="number"
          id="residents"
          className="form-control i"
          value={numberOfResidents}
          onChange={(e) => setNumberOfResidents(e.target.value)}
          placeholder="Enter number of residents"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="usage" className="form-label">Energy Usage (kWh):</label>
        <input
          type="number"
          id="usage"
          className="form-control i"
          value={energyUsage}
          onChange={(e) => setEnergyUsage(e.target.value)}
          placeholder="Enter energy usage"
        />
        </div>
      </div>
    <div className='bc'>

      <button className="btn btn-primary b" onClick={calculateEfficiency}>Calculate Efficiency</button>
      <button className="btn btn-primary b" >
           <a href='/logged/success'>
            DashBoard
           </a>
          </button>
    </div>
      {efficiencyScore !== null && (
        <div className="mt-4">
          <h3>Efficiency Score:</h3>
          <p>{efficiencyScore}%</p>
        </div>
      )}
    </div>
  );
};

export default EnergyCalculator;
