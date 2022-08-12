import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transactions = ({ items }) => {
  return (
    <section className={styles.transaction}>
      <h2>Transaction History</h2>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.cell}>Type</th>
            <th className={styles.cell}>Amount</th>
            <th className={styles.cell}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.row}>
              <td className={styles.cellColumn}>{type}</td>
              <td className={styles.cellColumn}>{amount}</td>
              <td className={styles.cellColumn}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
