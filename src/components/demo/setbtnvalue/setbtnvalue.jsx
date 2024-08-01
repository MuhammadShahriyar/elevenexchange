import React from 'react'
import "./setbtnvalue.css"
import { useState } from 'react';
const Setbtnvalue = () => {
  const [values, setValues] = useState({
    '1k': 1000,
    '2k': 2000,
    '5k': 5000,
    '10k': 10000,
    '20k': 20000,
    '25k': 25000,
    '50k': 50000,
    '75k': 75000,
    '90k': 90000,
    '95k': 95000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Values:', values);
  };

  return (
    <div className="button-value-form">
      <h1>Set Button Value</h1>
      <div className="tabs">
        <button className="tablinks active">Game Buttons</button>
        <button className="tablinks">Casino Buttons</button>
      </div>

      <form onSubmit={handleSubmit} className="form-section">
        {Object.keys(values).map((label) => (
          <div key={label} className="form-group">
            <label className="form-label">
              Price Label:
              <input
                type="text"
                name={label}
                value={label}
                readOnly
                className="input-field"
              />
            </label>
            <label className="form-label">
              Price Value:
              <input
                type="number"
                name={label}
                value={values[label]}
                onChange={handleChange}
                className="input-field"
              />
            </label>
          </div>
        ))}
      </form>
        <button type="submit" className="submit-button">Update</button>
    </div>
  );
};


export default Setbtnvalue