import React, { useState } from 'react';
import "./calculator.css"
import axios from 'axios';
const CarbonFootprintCalculator = () => {
  const [inputValues, setInputValues] = useState({
    electricityUsage: 0,
    carMileage: 0,
    foodConsumed: 0,
    clothesPurchased: 0,
  });

  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: parseFloat(value) || 0,
    });
  };

  const calculateCarbonFootprint = () => {
    // Example calculation (fictional formula)
    const { electricityUsage, carMileage, foodConsumed, clothesPurchased } = inputValues;
    const carbonFootprintResult =
    electricityUsage * 0.4 + carMileage * 0.125 + foodConsumed * 0.725 + clothesPurchased * 4 ;
    setCarbonFootprint(carbonFootprintResult);
  };
  // const SaveData = (itemId) => {
  //   const { electricityUsage,  foodConsumed, clothesPurchased } = inputValues;
  //   if(carbonFootprint==null){
  //     alert("Fill the fields Before Saving")
  //   }
  //   const carbon = itemId
  //   axios.post('http://localhost:8080/CarbonFootprint', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Id-Data': JSON.stringify({ Carbon:carbon,electricity:electricityUsage,organic:foodConsumed,fashion:clothesPurchased }),
  //     }
  //   }).then(res =>{
  //     if(res.status == 200){
  //     alert("Saved Successfully")
  //   }else{
  //     // window.location.href = 'http://127.0.0.1:5173/error'
  //     alert("Failed in Saving")
  //     }
      
  //   }) 
    
  //   // window.location.href = 'http://127.0.0.1:5173/logged/success'
  // }
  const SaveData = () => {
    const { electricityUsage, foodConsumed, clothesPurchased } = inputValues;
    if (carbonFootprint == null) {
      alert("Fill the fields Before Saving");
    } else {
      const carbon = carbonFootprint;
      axios.post('http://localhost:8080/CarbonFootprint', JSON.stringify({ Carbon: carbon, electricity: electricityUsage, organic: foodConsumed, fashion: clothesPurchased }), {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {
        if (res.status == 200) {
          alert("Saved Successfully");
          window.location.reload()
        } else {
          // window.location.href = 'http://127.0.0.1:5173/error'
          alert("Failed in Saving");
        }
      })
    }
  };
  return (
    <div className="container mt-4 box">
      <h2 className="mb-4">Carbon Footprint Calculator</h2>
      <div className="mb-3">
        {/* <div>Average humans perday CO2 emission 10.8kg"</div> */}
      <div>Refrence : <a href='https://www.iea.org/reports/co2-emissions-in-2022' >...</a></div>
      <div className='input box'>
    
        <label className="form-label">
          Electricity Usage (kWh):
          <input
            type="number"
            className="form-control"
            name="electricityUsage"
            value={inputValues.electricityUsage}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Vehicular Travel (Km):
          <input
            type="number"
            className="form-control"
            name="carMileage"
            value={inputValues.carMileage}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          No of Meals:
          <input
            type="number"
            className="form-control"
            name="foodConsumed"
            value={inputValues.foodConsumed}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Number of Clothes Purchased:
          <input
            type="number"
            className="form-control"
            name="clothesPurchased"
            value={inputValues.clothesPurchased}
            onChange={handleChange}
          />
        </label>
      </div>
      </div>
      <div className='buttonBox'>

      <button className="btn btn-primary b" onClick={calculateCarbonFootprint}>
        Calculate
      </button>
      <button className="btn btn-success b" onClick={SaveData}>
            Save
          </button>
      <button className="btn btn-primary b" >
           <a href='/logged/success'>
            DashBoard
           </a>
          </button>
      </div>
      {carbonFootprint !== null && (
        <div className="mt-3">
          <h3>Result:</h3>
          <p>Carbon Footprint: Approx {carbonFootprint.toFixed(2)} kg CO2e</p>
        </div>
      )}
    </div>
  );
};


export default CarbonFootprintCalculator;
