import React from 'react';
import styles from './PriceAnalytics.module.css';

export const PriceCard = ({ index, onPriceChange }) => {
  const handleChange = (event) => {
    onPriceChange(index, event.target.value);
  };

  return (
    <article className={styles.priceCard}>
      <div className={styles.priceLabel}>Price</div>
      <input
        type="number"
        className={styles.priceChart}
        onChange={handleChange}
        placeholder="Enter price"
      />
    </article>
  );
};
