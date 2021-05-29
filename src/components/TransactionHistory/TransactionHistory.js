import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table align="center" className={styles.transactionHistory}>
      <thead className={styles.tableTopString}>
        <tr>
          <th className={styles.tableTitle}>Type</th>
          <th className={styles.tableTitle}>Amount</th>
          <th className={styles.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id} className={styles.tr}>
            <td className={styles.tableContent}>{type}</td>
            <td className={styles.tableContent}>{amount}</td>
            <td className={styles.tableContent}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
