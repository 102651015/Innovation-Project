import React from 'react';
import styles from './PriceAnalytics.module.css';

export const PriceCard = () => {
  return (
    <article className={styles.priceCard}>
      <div className={styles.priceLabel}>
        Price
      </div>
      <div className={styles.priceChart} />
    </article>
  );
};