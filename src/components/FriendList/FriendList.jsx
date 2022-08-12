import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={styles.friend}>
      <h2>Friend List Item</h2>
      <ul className={styles.friendList}>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <li className={styles.friendItem} key={id}>
            <span
              className={isOnline === true ? styles.statusOn : styles.statusOff}
            >
              {isOnline}
            </span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
