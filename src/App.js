import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import users from './users.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transaction from './transactions.json';

export default function App() {
  return (
    <div>
      <section className="profile">
        <h2 class="title">Задание 1 - Профиль социальной сети</h2>
        {users.map(user => (
          <Profile
            key={user.id}
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        ))}
      </section>

      <section class="statistics">
        <h2 class="title">Задание 2 - Секция статистики</h2>
        <h3 class="title">Upload Stats</h3>
        <ul class="stat-list">
          {statisticalData.map(el => (
            <Statistics label={el.label} percentage={el.percentage} />
          ))}
        </ul>
      </section>

      <section class="friends">
        <h2 class="title">Задание 3 - Список друзей</h2>
        <ul class="friend-list">
          {friends.map(el => (
            <FriendList
              isOnline={el.isOnline}
              avatar={el.avatar}
              name={el.name}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2 class="title">Задание 4 - История транзакций</h2>
        <table class="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map(el => (
              <TransactionHistory
                type={el.type}
                amount={el.amount}
                currency={el.currency}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
