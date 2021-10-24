import PropTypes from 'prop-types';

export default function Statistics({ isOnline, avatar, name }) {
  return (
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="Аватар пользователя" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

Statistics.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
