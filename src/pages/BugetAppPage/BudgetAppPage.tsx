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
    <div className="budget_layout">
      <div className="sidebar">
        <CategoriesPanel setFilter={setFilter} />
      </div>
      <div>
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
    </div>
  );
};

export default BudgetAppPage;

//  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
//
//  const handleSelectSubcategory = (subcategory) => {
//    setSelectedSubcategory(subcategory);

//const AddTransactionsToCat = (subcategory, transaction) => {
//  setTransactions((prevTransactions) => ({
//    ...prevTransactions,
//    [subcategory]: [...prevTransactions[subcategory], transaction],
//  }));
//};

//const handleAddTransaction = (subcategory, transaction) => {
//  setTransactions((prevTransactions) => [
//    ...prevTransactions,
//    { subcategory, description: transaction },
//  ]);
//};

//  const renderTransactionsToCat = () => {
//    return (
//      <div className="transactions">
//        <h3>Transactions for {selectedSubcategory}</h3>
//        <ul>
//          {transactions[selectedSubcategory]?.map((transaction, index) => (
//            <li key={index}>{transaction}</li>
//          ))}
//        </ul>
//      </div>
//    );
//    if (!selectedSubcategory) return null;
//  };
//};

//const renderTransactionsToCat = () => {
//  const filteredTransactions = transactions.filter(
//    (transaction) => transaction.subcategory === selectedSubcategory
//  );
//  return (
//    <div className="transactions">
//      <h3>Transactions for {selectedSubcategory}</h3>
//      <ul>
//        {transactions[selectedSubcategory]?.map((transaction, index) => (
//          <li key={index}>{transaction}</li>
//        ))}
//      </ul>
//    </div>
//  );
//};
