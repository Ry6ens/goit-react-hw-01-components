import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from './Profile/user';
import data from './Statistics/data';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload Stats" stats={data} />
    </>
  );
};
