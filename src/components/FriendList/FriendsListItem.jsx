import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendsListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.friendItem}>
      <span
        className={isOnline === true ? styles.statusOn : styles.statusOff}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendsListItem;

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
