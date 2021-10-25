import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import users from './users.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transaction from './transactions.json';
import styles from './components/css/Profile.module.css';
import styles_stat from './components/css/Statistics.module.css';
import styles_friend from './components/css/FriendList.module.css';
import styles_trans from './components/css/TransactionHistory.module.css';

export default function App() {
  return (
    <div>
      <section className={styles.profile_section}>
        <h2 className={styles.title}>Задание 1 - Профиль социальной сети</h2>
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

      <section className={styles.profile_section}>
        <h2 className={styles.title}>Задание 2 - Секция статистики</h2>
        <div className={styles_stat.stats_frame}>
          <h3 className={styles_stat.stats_title}>Upload Stats</h3>
          <ul className={styles_stat.stats_list}>
            {statisticalData.map(el => (
              <Statistics
                key={el.id}
                label={el.label}
                percentage={el.percentage}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.profile_section}>
        <h2 className={styles.title}>Задание 3 - Список друзей</h2>
        <ul className={styles_friend.friend_list}>
          {friends.map(el => (
            <FriendList
              key={el.id}
              isOnline={el.isOnline}
              avatar={el.avatar}
              name={el.name}
            />
          ))}
        </ul>
      </section>

      <section className={styles.profile_section}>
        <h2 className={styles.title}>Задание 4 - История транзакций</h2>
        <table className={styles_trans.trans_history}>
          <thead className={styles_trans.trans_title}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map(el => (
              <TransactionHistory
                key={el.id}
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
