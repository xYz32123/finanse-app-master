import React, { useState } from "react";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import { BudgetBalanceTransactionSection } from "../../components/BudgetBalanceTransactionSection/BudgetBalanceTransactionSection";
import CategoriesPanel from "../../components/CategoriesPanel/CategoriesPanel";
import "./index.css";
const BudgetAppPage = () => {
  const [editedTransaction, setEditedTransaction] = useState(null);
  const [transactions, setTransaction] = useState([
    {
      id: "1",
      isPositive: true,
      description: "Salary",
      price: "5000",
      category: "Daily",
      subcategory: "Transport",
      date: "2023-10-01",
    },
    {
      id: "2",
      isPositive: false,
      description: "Groceries",
      price: "150",
      category: "Seasonal",
      subcategory: "Projects",
      date: "2023-10-02",
    },
  ]);

  const [filter, setFilter] = useState("");

  return (
    <div className="app-container">
      <div className="left-column">
        <CategoriesPanel setFilter={setFilter} />
      </div>
      <div className="middle-column">
        <AddTransaction
          transactions={transactions}
          setTransaction={setTransaction}
          editedTransaction={editedTransaction}
          setEditedTransaction={setEditedTransaction}
        />
        <BudgetBalanceTransactionSection
          transactions={transactions}
          editedTransaction={editedTransaction}
          setEditedTransaction={setEditedTransaction}
          setTransaction={setTransaction}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="right-column">
        {/*<ChartsPanel /> Dodanie komponentu wykresów*/}
      </div>
    </div>
  );
};

export default BudgetAppPage;
