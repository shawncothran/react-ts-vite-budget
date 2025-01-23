import { useTransactions } from "../../hooks/use_transactions"
import { Pane } from "../../elements/Pane"
import "./Transactions.scss"

export const Transactions = () => {
  const { transactions, calculateBalance } = useTransactions()
  const startingBalance = 3250.2
  const balance = calculateBalance(startingBalance)

  return (
    <Pane size="lg" title="Transactions">
      <div className="transactions">
        <section className="transactions__summary">
          <h2 className="transactions__label">Current Balance</h2>
          <span className="transactions__amount">
            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </section>
        <ul className="transactions__list">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={`transactions__item ${
                transaction.amount < 0 ? "negative" : "positive"
              }`}
            >
              <div className="transactions__indicator"></div>
              <div className="transactions__item-left">
                <span className="transactions__description">
                  {transaction.description}
                </span>
                <span className="transactions__category">
                  {transaction.category}
                </span>
              </div>
              <div className="transactions__item-right">
                <span
                  className={`transactions__amount ${
                    transaction.amount < 0 ? "negative" : "positive"
                  }`}
                >
                  {transaction.amount < 0 ? "-" : "+"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </span>
                <span className="transactions__date">{transaction.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Pane>
  )
}
