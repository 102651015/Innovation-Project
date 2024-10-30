// PriceCard.js
import React from 'react';
import styles from './PriceAnalytics.module.css';

// PriceCard Component: displays a single input field with a label
// label: Label for each PriceCard input field
// onValueChange: Callback to update the parent component with the new value
export const PriceCard = ({ index, label,value,onValueChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value === '' ? '' : parseInt(event.target.value, 10); // Convert to integer if not empty
    onValueChange(index, newValue); // Pass the input field value to the parent component
  };

  return (
    <article className={styles.priceCard}>
      <div className={styles.priceLabel}>{label}</div>
      <input
        type="number"
        className={styles.priceChart}
        value={value} // Set the current value of the input
        onChange={handleChange}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </article>
  );
};