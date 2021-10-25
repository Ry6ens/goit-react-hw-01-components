import PropTypes from 'prop-types';
import styles_stat from './css/Statistics.module.css';

export default function Statistics({ label, percentage }) {
  return (
    <li className={styles_stat.stats_item}>
      <span className={styles_stat.stats_label}>{label}</span>
      <span className={styles_stat.stats_percentage}>{percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
