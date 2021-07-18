import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackSection}>
      {options.map((el) => {
        return (
          <button
            key={el}
            name={el}
            onClick={onLeaveFeedback}
            className={styles.feedbackButton}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
