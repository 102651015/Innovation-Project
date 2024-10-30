// PriceCard.js
import React from 'react';
import styles from './PriceAnalytics.module.css';

// PriceCard Component: displays a single input field with a label
// label: Label for each PriceCard input field
// onValueChange: Callback to update the parent component with the new value
export const PriceCard = ({ index, label, onValueChange }) => {
  const handleChange = (event) => {
    onValueChange(index, event.target.value); // Pass the input field value to the parent component
  };

  return (
    <article className={styles.priceCard}>
      <div className={styles.priceLabel}>{label}</div>
      <input
        type="number"
        className={styles.priceChart}
        onChange={handleChange}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </article>
  );
};
