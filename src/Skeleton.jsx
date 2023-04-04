import React from 'react';
import styles from './Skeleton.module.css';

const Line = ({ size }) => {
  return <div style={{ height: size }} className={styles.line}></div>;
};

const TableRow = ({ header, height }) => {
  return (
    <div
      style={{ height }}
      className={header ? styles.tableHeader : styles.tableRow}
    >
      <div className={styles.tableCell}></div>
      <div className={styles.tableCell}></div>
      <div className={styles.tableCell}></div>
      <div className={styles.tableCell}></div>
    </div>
  );
};

const Table = () => {
  return (
    <>
      <TableRow height={70} header />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
      <TableRow height={42} />
    </>
  );
};

const Skeleton = () => {
  return (
    <>
      <Line size={140} />
      <Table />
    </>
  );
};

export default Skeleton;
