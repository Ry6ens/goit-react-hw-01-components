import PropTypes from 'prop-types';
import styles from './css/Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
          width="120"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats_item}>
          <span class={styles.label}>Followers</span>
          <span class={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.stats_item}>
          <span class={styles.label}>Views</span>
          <span class={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.stats_item}>
          <span class={styles.label}>Likes</span>
          <span class={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
