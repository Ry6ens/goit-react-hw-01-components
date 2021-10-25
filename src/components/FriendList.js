import PropTypes from 'prop-types';
import styles_friend from './css/FriendList.module.css';

export default function Statistics({ isOnline, avatar, name }) {
  return (
    <li className={styles_friend.friend_item}>
      {isOnline ? (
        <span className={styles_friend.friend_status_online}></span>
      ) : (
        <span className={styles_friend.friend_status_offline}></span>
      )}
      <img
        className={styles_friend.friend_avatar}
        src={avatar}
        alt="Аватар пользователя"
        width="48"
      />
      <p className={styles_friend.friend_name}>{name}</p>
    </li>
  );
}

Statistics.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
