import React from 'react';
import styles from './Tabs.module.css';

const Tab = ({ name, index, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.TabsTab} ${active && styles.active}`}
      style={{ '--index': index }}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default Tab;
