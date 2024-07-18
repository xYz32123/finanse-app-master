import React, { useState } from "react";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import { BudgetBalanceTransactionSection } from "../../components/BudgetBalanceTransactionSection/BudgetBalanceTransactionSection";
import CategoriesPanel from "../../components/CategoriesPanel/CategoriesPanel";
import "./index.css";
import AddTransactionsToCat from "../../components/CategoriesPanel/AddTransactionsToCat.jsx";
const BudgetAppPage = () => {
  const [editedTransaction, setEditedTransaction] = useState(null);
  console.log(editedTransaction, "editedTransaction");
  const [transactions, setTransaction] = useState([
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
  ]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  //const AddTransactionsToCat = (subcategory, transaction) => {
  //  setTransactions((prevTransactions) => ({
  //    ...prevTransactions,
  //    [subcategory]: [...prevTransactions[subcategory], transaction],
  //  }));
  //};

  const handleAddTransaction = (subcategory, transaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { subcategory, description: transaction },
    ]);
  };

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

  const renderTransactionsToCat = () => {
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.subcategory === selectedSubcategory
    );
    return (
      <div className="transactions">
        <h3>Transactions for {selectedSubcategory}</h3>
        <ul>
          {transactions[selectedSubcategory]?.map((transaction, index) => (
            <li key={index}>{transaction}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
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
        />
      </div>
      <div className="sidebar">
        <CategoriesPanel onSelectSubcategory={handleSelectSubcategory} />
      </div>
    </div>
  );
};

export default BudgetAppPage;
