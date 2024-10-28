import React from 'react';
import styles from './MarketExplorer.module.css';

function MarketInsightCard() {
  return (
    <article className={styles.marketInsight}>
      <div className={styles.insightCard}>
        <div className={styles.cardContent}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/b18da71b81a48e82b1899aafb78261309aef37f2c59b6906ac3a67dbd0de86d9?apiKey=d15d64ea902e41f8849cd1404c808385&" 
            className={styles.marketIcon}
            alt="Sydney market insights"
          />
          <p>Explore the Sydney market as an investor in Realiste.</p>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/92ecbb2fb1c7dc40c302de9d1f3bcbd93bb64ff414bf228a1c950fdf43f19961?apiKey=d15d64ea902e41f8849cd1404c808385&" 
            className={styles.icon}
            alt=""
          />
        </div>
      </div>
    </article>
  );
}

export default MarketInsightCard;