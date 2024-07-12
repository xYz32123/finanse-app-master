import React from "react";
import { ListItem } from "../ListItem/ListItem";
import "./index.css";

export const BudgetBalanceExpensesSection = ({
  expenses, 
  setExpenses,
  editedExpense,
  setEditedExpense
}) => {
  const formatPrice = (price, isPositive) => {
  
    return isPositive ? `+${price.toFixed(2)}` : `-${price.toFixed(2)} PLN`;
  };

  return (
    <section className="budget_balance">
      <h2 className="balance_heading"></h2>
      <article className="balance_list">
        {
          !!expenses.filter((item) => item.isPositive).length && (
          
          <section className="list">
            <h3 className="list_heading list_heading--incomes">Incomes</h3>
            <ul className="list_list">
              {expenses
                .filter((item) => item.isPositive)
                .map((item) => (
                  <ListItem key={item.id} {...item} formatPrice={formatPrice} expenses= {expenses} setExpenses={setExpenses}
                  setEditedExpense={setEditedExpense}/>
                ))}
            </ul>
          </section>
          )

        }
        
        {
          !!expenses.filter((item) => !item.isPositive).length && (
          
          <section className="list">
            <h3 className="list_heading list_heading--expenses">Expenses</h3>
            <ul className="list_list">
              {expenses
                .filter((item) => !item.isPositive)
                .map((item) => (
                  <ListItem key={item.id} {...item} formatPrice={formatPrice} expenses= {expenses} setExpenses={setExpenses}
                  editedExpense={editedExpense}
                setEditedExpense={setEditedExpense}
                  />
                ))}
            </ul>
          </section>
          )
        }
      </article>
    </section>
  );
};