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

  const filterItemsIncomes = (items, filter = null) => {
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

  const filterItemsExpenses = (items, filter = null) => {
    return items.filter((item) => {
      if (item.isPositive) {
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
              {filterItemsIncomes(transactions, filter).map((item) => (
                <ListItem
                  key={item.idtransactions}
                  id={item.idtransactions}
                  isPositive={item.isPositive}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  subcategory={item.subcategory}
                  date={item.date}
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

        {!!transactions.filter((item) => !item.isPositive).length && (
          <section className="list">
            <h3 className="list_heading list_heading--transactions">
              Expenses
            </h3>
            <ul className="list_list">
              {filterItemsExpenses(transactions, filter).map((item) => (
                <ListItem
                  key={item.idtransactions}
                  id={item.idtransactions}
                  isPositive={item.isPositive}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  subcategory={item.subcategory}
                  date={item.date}
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
