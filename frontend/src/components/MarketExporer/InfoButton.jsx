import React from 'react';
import styles from './PriceAnalytics.module.css';

export const InfoButton = ({ text, iconSrc }) => {
  return (
    <button className={styles.infoButton}>
      <span>{text}</span>
      <img loading="lazy" src={iconSrc} alt="" className={styles.buttonIcon} />
    </button>
  );
};