import React from 'react';
import styles from './MarketExplorer.module.css';
import QuickNavigation from './QuickNavigation';
import MarketInsightCard from './MarketInsightCard';
import SearchSection from './SearchSection';
import InfoSection from './InfoSection';

function MarketExplorer() {
  return (
    <main className={styles.marketExplorer}>
      <div className={styles.container}>
        <section className={styles.card}>
          <div className={styles.mainContent}>
            <div className={styles.contentGrid}>
              <section className={styles.locationSection}>
                <header className={styles.locationHeader}>
                  <h1 className={styles.cityName}>Sydney</h1>
                  <img 
                    loading="lazy" 
                    src="https://cdn.builder.io/api/v1/image/assets/d15d64ea902e41f8849cd1404c808385/2637c7afd4d699aa2784e570cd135d6fb570bd72ff1de0dadf5953bf2ff8ddf2?apiKey=d15d64ea902e41f8849cd1404c808385&" 
                    className={styles.icon}
                    alt=""
                  />
                  <p className={styles.settingText}>Setting</p>
                  <QuickNavigation />
                  <MarketInsightCard />
                </header>
              </section>

              <section className={styles.mainSection}>
                <SearchSection />
              </section>

              <aside className={styles.infoSection}>
                <InfoSection />
              </aside>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MarketExplorer;