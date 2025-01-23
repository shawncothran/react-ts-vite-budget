import { useTransactions } from "../../hooks/use_transactions"
import { Pane } from "../../elements/Pane"
import "./Transactions.scss"

export const Transactions = () => {
  const { transactions, calculateBalance } = useTransactions()
  const startingBalance = 3250.2
  const balance = calculateBalance(startingBalance).toFixed(2)
  const formattedBalance = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(Number(balance))

  // Group transactions by month
  const transactionsByMonth = transactions.reduce(
    (acc: { [key: string]: typeof transactions }, transaction) => {
      const month = new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "long",
      }).format(new Date(transaction.date))
      if (!acc[month]) {
        acc[month] = []
      }
      acc[month].push(transaction)
      return acc
    },
    {}
  )

  return (
    <Pane size="lg" title="Transactions">
      <div className="transactions">
        <div className="transactions__balance">
          <p className="transactions__balance-label">Balance</p>
          <h2 className="transactions__balance-amount">{formattedBalance}</h2>
        </div>
        <ul className="transactions__list">
          {Object.entries(transactionsByMonth).map(
            ([month, monthTransactions]) => (
              <li key={month} className="transactions__month-group">
                <h3 className="transactions__month-header">{month}</h3>
                <ul className="transactions__month-list">
                  {monthTransactions.map((transaction) => (
                    <li
                      key={transaction.id}
                      className={`transactions__item ${
                        transaction.amount < 0 ? "negative" : "positive"
                      }`}
                    >
                      <div className="transactions__item-header">
                        <span className="transactions__description">
                          {transaction.description}
                        </span>

                        <span
                          className={`transactions__amount ${
                            transaction.amount < 0 ? "negative" : "positive"
                          }`}
                        >
                          {transaction.amount < 0 ? "-" : "+"}
                          {new Intl.NumberFormat(undefined, {
                            style: "currency",
                            currency: "USD",
                          }).format(
                            Number(Math.abs(transaction.amount).toFixed(2))
                          )}
                        </span>
                      </div>

                      <div className="transactions__item-footer">
                        <span className="transactions__category">
                          {transaction.category}
                        </span>

                        <span className="transactions__date">
                          {new Intl.DateTimeFormat(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }).format(new Date(transaction.date))}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </Pane>
  )
}
