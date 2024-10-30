// PriceAnalytics.js
import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import styles from './PriceAnalytics.module.css';
import { PriceCard } from './PriceCard';
import { InfoButton } from './InfoButton';

// Define the labels for each PriceCard field
const labels = [
  'rooms',
  'buildingArea',
  'type',
  'yearBuilt',
  'bathroom',
  'carspace'
];

const PriceAnalytics = () => {
  // Use useState to store the input values of each PriceCard
  const [values, setValues] = useState(Array(6).fill(''));

  // Update the value for the specified index in the values array
  const handleValueChange = (index, value) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);
  };

  // Send data to the backend for prediction
  const handlePredict = async () => {
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values }), // Send the values array to the backend
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Prediction result:', result);
      } else {
        console.error('Failed to fetch prediction');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.content}>
            
            {/* Chart Controls: Allows user to select chart type and trigger prediction */}
            <aside className={styles.chartSection}>
              <div className={styles.chartControls}>
                <Select
                  className={styles.chartTypeSelect}
                  value=""
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select chart type' }}>
                  <MenuItem value="">Select chart Type</MenuItem>
                </Select>
                <button className={styles.predictButton} onClick={handlePredict}>
                  <div className={styles.buttonContent}>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/5785c4bf432ad8ebffef6079c7c8f3bfc60a3749ae6b42c26534ea0c4a1afe14?apiKey=d15d64ea902e41f8849cd1404c808385&" alt="" className={styles.buttonIcon} />
                    <span className={styles.buttonText}>
                      Click to start predict and Display data
                    </span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/23779ab94b33cbc440b499163aff7cdd24e16506a1964767f44ab194449dd2ee?apiKey=d15d64ea902e41f8849cd1404c808385&" alt="" className={styles.arrowIcon} />
                  </div>
                </button>
              </div>
            </aside>

            {/* Grid section containing PriceCard components for each data input */}
            <section className={styles.priceGrid}>
              {labels.map((label, index) => (
                <PriceCard key={index} index={index} label={label} onValueChange={handleValueChange} />
              ))}
            </section>

            {/* Information section with InfoButton components */}
            <aside className={styles.infoSection}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>Do you want to know more?</h2>
                <hr className={styles.divider} />
                <InfoButton text="button" />
                <hr className={styles.divider} />
                <InfoButton text="button" />
                <hr className={styles.divider} />
              </div>
              <button className={styles.contactButton}>
                Contact with us
              </button>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PriceAnalytics;


