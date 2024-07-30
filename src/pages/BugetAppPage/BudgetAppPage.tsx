import React, { useState } from "react";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import { BudgetBalanceTransactionSection } from "../../components/BudgetBalanceTransactionSection/BudgetBalanceTransactionSection";
import CategoriesPanel from "../../components/CategoriesPanel/CategoriesPanel";
import "./index.css";
import { useFetch } from "../../Communication/Fetch";
//import { ChartsPanel } from "../../components/ChartsPanel/ChartsPanel";

const BudgetAppPage = () => {
  const [editedTransaction, setEditedTransaction] = useState(null);

  const [filter, setFilter] = useState("");

  const { transactions, setTransactions } = useFetch();

  return (
    <div className="app-container">
      <div className="left-column">
        <CategoriesPanel setFilter={setFilter} />
      </div>
      <div className="middle-column">
        <AddTransaction
          transactions={transactions}
          setTransaction={setTransactions}
          editedTransaction={editedTransaction}
          setEditedTransaction={setEditedTransaction}
        />
        <BudgetBalanceTransactionSection
          transactions={transactions}
          editedTransaction={editedTransaction}
          setEditedTransaction={setEditedTransaction}
          setTransaction={setTransactions}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="right-column">
        <h1>Charts</h1>
        {/*<ChartsPanel />*/}
        {/*Dodanie komponentu wykresów*/}
      </div>
    </div>
  );
};

export default BudgetAppPage;
