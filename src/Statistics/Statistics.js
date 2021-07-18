import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={styles.good}>Good: {good}</p>
      <p className={styles.neutral}>Neutral: {neutral}</p>
      <p className={styles.bad}>Bad: {bad}</p>
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.positive}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
