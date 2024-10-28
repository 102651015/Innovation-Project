import React from 'react';
import styles from './MarketExplorer.module.css';

function QuickNavigation() {
  return (
    <nav className={styles.quickNav}>
      <div className={styles.navContent}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/6bdfee24746c500d9c333c8bbd3047092c23d5d21bd20907307bfa5df159a54f?apiKey=d15d64ea902e41f8849cd1404c808385&" 
          className={styles.icon}
          alt=""
        />
        <p>Quick browsing of platform basic knowledge</p>
      </div>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/f5c64c411bbe64837349a5e906953701801e29f77d7979564fe5576d28ce9799?apiKey=d15d64ea902e41f8849cd1404c808385&" 
        className={styles.icon}
        alt=""
      />
    </nav>
  );
}

export default QuickNavigation;