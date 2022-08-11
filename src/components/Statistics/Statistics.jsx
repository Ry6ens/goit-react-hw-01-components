import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={s.statistics}>
        {title && <h2 className="title">{title}</h2>}

        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={s.item}
              key={id}
              style={{
                backgroundColor: `#${Math.floor(Math.random() * 16777215)
                  .toString(16)
                  .padStart(6, 0)}`,
              }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
