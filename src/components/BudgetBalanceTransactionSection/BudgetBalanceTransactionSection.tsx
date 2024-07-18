import React from "react";
import { ListItem } from "../ListItem/ListItem";
import "./index.css";

export const BudgetBalanceTransactionSection = ({
  transactions,
  setTransaction,
  editedTransaction,
  setEditedTransaction,
  filter,
  setFilter,
}) => {
  const formatPrice = (price, isPositive) => {
    return isPositive ? `+${price.toFixed(2)}` : `-${price.toFixed(2)} PLN`;
  };

  //wykonać te funkcje dla expenses (filter positive i negative)
  const filterItems = (items, filter = null) => {
    return items.filter((item) => {
      if (!item.isPositive) {
        return false;
      }
      if (filter) {
        return item.category === filter || item.subcategory === filter;
      }
      return true;
    });
  };

  return (
    <section className="budget_balance">
      <h2 className="balance_heading"></h2>
      <article className="balance_list">
        {!!transactions.filter((item) => item.isPositive).length && (
          <section className="list">
            <h3 className="list_heading list_heading--incomes">Incomes </h3>
            <ul className="list_list">
              {filterItems(transactions, filter).map((item) => (
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
