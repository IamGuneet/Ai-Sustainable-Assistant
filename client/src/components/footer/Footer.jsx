import "./footer.css"
import React, { useState, useEffect } from 'react';

const RandomElementDisplay = () => {
  const sampleArray = [
    "Turn off lights when leaving a room.",
    "Use reusable water bottles.",
    "Plant a tree in your community.",
    "Eat less meat, try plant-based meals.",
    "Unplug chargers and appliances.",
    "Carpool or use public transport.",
    "Choose energy-efficient appliances.",
    "Recycle paper, plastic, and glass.",
    "Use a programmable thermostat.",
    "Buy local and seasonal produce.",
    "Fix leaks to conserve water.",
    "Switch to LED light bulbs.",
    "Reduce, reuse, recycle.",
    "Opt for eco-friendly cleaning products.",
    "Conserve water during showers.",
    "Walk or bike for short distances.",
    "Use a reusable shopping bag.",
    "Turn off electronics at night.",
    "Compost kitchen waste.",
    "Lower thermostat in winter.",
    "Support sustainable businesses.",
    "Reduce food waste at home.",
    "Choose energy-efficient cars.",
    "Opt for solar-powered gadgets.",
    "Practice mindful consumption.",
    "Optimize computer power settings.",
    "Switch to paperless billing.",
    "Close curtains to save energy.",
    "Choose eco-friendly transportation.",
    "Use a power strip for devices.",
    "Participate in community clean-ups.",
    "Support renewable energy initiatives.",
    "Avoid single-use plastics.",
    "Buy second-hand or donate.",
    "Educate others on sustainability.",
    "Reuse glass jars and containers.",
    "Choose energy-efficient HVAC systems.",
    "Dispose of e-waste responsibly.",
    "Use cloth diapers when possible.",
    "Opt for a staycation.",
    "Attend local farmer's markets.",
    "Minimize water heater usage.",
    "Conserve energy when cooking.",
    "Plant a small vegetable garden.",
    "Print double-sided documents.",
    "Opt for bamboo or reusable straws.",
    "Practice mindful water usage.",
    "Use public spaces for gatherings.",
    "Donate to environmental causes."
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Select a random item when the component mounts
    selectRandomItem();
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  const selectRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * sampleArray.length);
    const randomItem = sampleArray[randomIndex];
    setSelectedItem(randomItem);
  };
  return (
    <div className="foot">
      <p className="tips">" {selectedItem} "</p>
      <footer className="footer mt-auto d-flex justify-content-center p-2 content text-secondary">हरितदीपः©2024</footer>
    </div>
  );
};

export default RandomElementDisplay;