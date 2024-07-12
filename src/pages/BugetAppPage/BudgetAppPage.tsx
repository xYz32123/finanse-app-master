import React, { useState } from "react";
import AddExpense from "../../components/AddExpense/AddExpense";
import { BudgetBalanceExpensesSection } from "../../components/BudgetBalanceExpensesSection/BudgetBalanceExpensesSection";
const BudgetAppPage = () => {
    const [editedExpense, setEditedExpense] = useState(null);
    console.log(editedExpense, "editedExpense");
    const[expenses, setExpenses] = useState(
        [
            {
              id: "1",
              isPositive: true,
              description: "Salary",
              price: "5000",
              category: "Income",
              subcategory: "Job",
              date: "2023-10-01",
            },
            {
              id: "2",
              isPositive: false,
              description: "Groceries",
              price: "150",
              category: "Expense",
              subcategory: "Food",
              date: "2023-10-02",
            },
          ]
    );


    return (
        <div>
            <AddExpense expenses={expenses} setExpenses = {
                setExpenses}
                editedExpense={editedExpense}
                setEditedExpense={setEditedExpense}
            />
            <BudgetBalanceExpensesSection expenses={
                expenses}
                editedExpense={editedExpense}
                setEditedExpense={setEditedExpense}
            
            setExpenses={setExpenses}
            />
        </div>
    );
}

export default BudgetAppPage;