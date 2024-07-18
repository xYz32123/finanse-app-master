import React, { useState } from "react";

const AddTransactionsToCat = ({ onAddTransaction }) => {
  const [transactions, setTransactions] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const handleTransactionChange = (e) => {
    setTransactions(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subcategory && transactions) {
      onAddTransaction(subcategory, transactions);
      setTransactions("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Transaction"
        value={transactions}
        onChange={handleTransactionChange}
      />
      <select value={subcategory} onChange={handleSubcategoryChange}>
        <option value="">Select Subcategory</option>
        <option value="Equipment">Equipment</option>
        <option value="Transport">Transport</option>
        <option value="Salaries">Salaries</option>
        <option value="Projects">Projects</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionsToCat;
