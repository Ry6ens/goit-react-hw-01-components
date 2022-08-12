import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'components/Profile/user';
import data from 'components/Statistics/data';
import friends from 'components/FriendList/friends';
import transactions from './TransactionHistory/transactions';

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
