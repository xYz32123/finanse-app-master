import React, { useState } from "react";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import { BudgetBalanceTransactionSection } from "../../components/BudgetBalanceTransactionSection/BudgetBalanceTransactionSection";
import CategoriesPanel from "../../components/CategoriesPanel/CategoriesPanel";
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

  return (
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
      <CategoriesPanel onSelectSubcategory={handleSelectSubcategory} />
    </div>
  );
};

export default BudgetAppPage;
