import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from './data/user';
import data from './data/data';
import friends from './data/friends';
import transactions from './data/transactions';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
