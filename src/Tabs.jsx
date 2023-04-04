import React from 'react';
import styles from './Tabs.module.css';
import Tab from './Tab';

const Tabs = ({ tab, setTab }) => {
  return (
    <div className={styles.TabsContainer}>
      <h1 className={styles.TabsHeading}>База даних "Бібліотека"</h1>
      <div className={styles.TabsSwitch}>
        {['Книги', 'Читачі', 'Видачі', 'Видавництва'].map((e, i) => (
          <Tab
            key={e}
            onClick={() => setTab(i)}
            name={e}
            index={i}
            active={i === tab}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
