import React from 'react';
import styles from './MarketExplorer.module.css';

function InfoSection() {
  const infoItems = [
    'Learn more about the data we use.',
    'Exploring the working principle of AI.'
  ];

  return (
    <div className={styles.infoContent}>
      <div className={styles.infoCard}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/2f1941d5fdcf8dd7f38be10d38e8da927a8275caa643a791c812b5ecc32e0412?apiKey=d15d64ea902e41f8849cd1404c808385&" 
          className={styles.icon}
          alt=""
        />
        <div>
          <h3 className={styles.infoTitle}>Do you want to know more?</h3>
          {infoItems.map((item, index) => (
            <React.Fragment key={index}>
              <hr className={styles.divider} />
              <p>{item}</p>
            </React.Fragment>
          ))}
          <hr className={styles.divider} />
        </div>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/2f1941d5fdcf8dd7f38be10d38e8da927a8275caa643a791c812b5ecc32e0412?apiKey=d15d64ea902e41f8849cd1404c808385&" 
          className={styles.icon}
          alt=""
        />
      </div>
      <button className={styles.contactButton}>
        Contact with us
      </button>
    </div>
  );
}

export default InfoSection;