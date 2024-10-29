import React from 'react';
import { TextField, Select, MenuItem } from '@mui/material';
import styles from './PriceAnalytics.module.css';
import { PriceCard } from './PriceCard';
import { InfoButton } from './InfoButton';

const PriceAnalytics = () => {
  const priceCards = Array(6).fill(null);
  
  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.content}>

            <aside className={styles.chartSection}>
              <div className={styles.chartControls}>
                <Select
                  className={styles.chartTypeSelect}
                  value=""
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select chart type' }}>
                  <MenuItem value="">Select chart Type</MenuItem>
                </Select>
                <button className={styles.predictButton}>
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

            <section className={styles.priceGrid}>
              {priceCards.map((_, index) => (
                <PriceCard key={index} />
              ))}
            </section>

            <aside className={styles.infoSection}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>Do you want to know more?</h2>
                <hr className={styles.divider} />
                <InfoButton text="button" iconSrc="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/f0b15f055915ecf2e2682787501cba280e9ed1ebda7faecae148104c51bda07e?apiKey=d15d64ea902e41f8849cd1404c808385&" />
                <hr className={styles.divider} />
                <InfoButton text="button" iconSrc="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/241b85aa84c5076d41b34094e0263cbaff1b994a8c979573a62b5a7eaf12a181?apiKey=d15d64ea902e41f8849cd1404c808385&" />
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