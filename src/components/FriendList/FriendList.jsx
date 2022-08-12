import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={styles.friend}>
      <h2>Friend List Item</h2>
      <ul className={styles.friendList}>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </ul>
    </section>
  );
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
