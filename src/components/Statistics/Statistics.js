import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomColor(color) {
  color =
    'rgb(' +
    Math.round(Math.random() * 333) +
    ',' +
    Math.round(Math.random() * 333) +
    ',' +
    Math.round(Math.random() * 333) +
    ')';

  return color;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul class={styles.statList}>
      {stats.map(({ label, percentage, id }) => (
        <li
          className={styles.statListItem}
          key={id}
          style={{
            backgroundColor: randomColor(),
          }}
        >
          <span className={styles.label}>{label}</span>
          <span class={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
