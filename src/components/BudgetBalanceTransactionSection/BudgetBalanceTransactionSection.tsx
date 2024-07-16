import React from "react";
import { ListItem } from "../ListItem/ListItem";
import "./index.css";

export const BudgetBalanceTransactionSection = ({
  transactions,
  setTransaction,
  editedTransaction,
  setEditedTransaction,
}) => {
  const formatPrice = (price, isPositive) => {
    return isPositive ? `+${price.toFixed(2)}` : `-${price.toFixed(2)} PLN`;
  };

  return (
    <section className="budget_balance">
      <h2 className="balance_heading"></h2>
      <article className="balance_list">
        {!!transactions.filter((item) => item.isPositive).length && (
          <section className="list">
            <h3 className="list_heading list_heading--incomes">Incomes</h3>
            <ul className="list_list">
              {transactions
                .filter((item) => item.isPositive)
                .map((item) => (
                  <ListItem
                    key={item.id}
                    {...item}
                    formatPrice={formatPrice}
                    transactions={transactions}
                    setTransaction={setTransaction}
                    setEditedTransaction={setEditedTransaction}
                  />
                ))}
            </ul>
          </section>
        )}

        {!!transactions.filter((item) => !item.isPositive).length && (
          <section className="list">
            <h3 className="list_heading list_heading--transactions">
              Expenses
            </h3>
            <ul className="list_list">
              {transactions
                .filter((item) => !item.isPositive)
                .map((item) => (
                  <ListItem
                    key={item.id}
                    {...item}
                    formatPrice={formatPrice}
                    transactions={transactions}
                    setTransaction={setTransaction}
                    editedTransaction={editedTransaction}
                    setEditedTransaction={setEditedTransaction}
                  />
                ))}
            </ul>
          </section>
        )}
      </article>
    </section>
  );
};
