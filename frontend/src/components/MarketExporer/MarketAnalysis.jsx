import React from 'react';
import { Button } from '@mui/material';
import styles from './MarketAnalysis.module.css';

const MarketAnalysis = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <aside className={styles.sidebarLeft}>
          <section className={styles.locationHeader}>
            <div className={styles.locationWrapper}>
              <div className={styles.locationTitle}>
                <h1>Sydney</h1>
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/840a9e6cbe56ce9eab8a725baf2f119c792bf2a3082a2f44924756852974bf4c?apiKey=d15d64ea902e41f8849cd1404c808385&" 
                  alt="Location indicator"
                  className={styles.locationIcon} 
                />
              </div>
              <div className={styles.settingsWrapper}>
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/dd241e4aede56cab0af6bb89e5e2ca77e268fb6c9357d75cd60bc387c335eb03?apiKey=d15d64ea902e41f8849cd1404c808385&" 
                  alt=""
                  className={styles.settingsIcon} 
                />
                <span>Setting</span>
              </div>
            </div>
            <div className={styles.quickBrowseBar}>
              <div className={styles.browseContent}>
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/3b2fcbfd167b7441ba86a589c666529420284d93c76708a72262eb71f0d5ee73?apiKey=d15d64ea902e41f8849cd1404c808385&" 
                  alt=""
                  className={styles.browseIcon} 
                />
                <p>Quick browsing of platform basic knowledge</p>
              </div>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/57dda524a33f6c3048721385f2effdfdebc568d2543420187c5222ae0de668e0?apiKey=d15d64ea902e41f8849cd1404c808385&" 
                alt=""
                className={styles.browseIcon} 
              />
            </div>
          </section>
        </aside>

        <section className={styles.mainContent}>
          <div className={styles.ratingSection}>
            <nav className={styles.navigationBar}>
              <Button variant="contained">Place</Button>
              <Button variant="contained">Summary</Button>
            </nav>
            <h2>AI Rating</h2>
          </div>
        </section>

        <aside className={styles.sidebarRight}>
          <section className={styles.infoSection}>
            <h3>Do you want to know more?</h3>
            <nav>
              <ul>
                <li>Learn more about the data we use.</li>
                <li>Exploring the working principle of AI.</li>
              </ul>
            </nav>
            <Button 
              variant="outlined"
              className={styles.contactButton}
            >
              Contact with us
            </Button>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default MarketAnalysis;