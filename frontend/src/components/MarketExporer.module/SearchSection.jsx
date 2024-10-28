import React from 'react';
import styles from './MarketExplorer.module.css';

function SearchSection() {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.searchBar}>
        <input 
          type="search"
          className={styles.searchInput}
          aria-label="Search places"
        />
        <label htmlFor="place">Place</label>
        <span className={styles.summary}>Summary</span>
      </div>
      <div className={styles.resultSection} />
      <button className={styles.showAllButton}>
        Show all
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/fbd55e667b97b64b159b6cfefade9d919af087e2580fad7ce543c4b1b8bbdf78?apiKey=d15d64ea902e41f8849cd1404c808385&" 
          className={styles.icon}
          alt=""
        />
      </button>
      <h2 className={styles.aiRatingText}>AI Rating</h2>
    </div>
  );
}

export default SearchSection;