import Profile from './Profile/Profile';
import user from './json/user.json';

// const resolve = fetch(
//   'https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/social-profile/user.json'
// );

// const response = resolve.then(response => response.json());
// const users = response.then(user => console.log(user));

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
