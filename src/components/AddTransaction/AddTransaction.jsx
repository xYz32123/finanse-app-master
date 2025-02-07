import { useState, useEffect } from "react";
import "./index.css";
import { postTransaction } from "../../Communication/fetchPost";
import { updateTransaction } from "../../Communication/fetchPut";

const AddTransaction = ({
  setTransaction,
  transactions,
  editedTransaction,
  setEditedTransaction,
}) => {
  const [description, setDescription] = useState(
    editedTransaction?.description || ""
  );
  const [value, setValue] = useState(editedTransaction?.price || "");
  const [category, setCategory] = useState(editedTransaction?.category || "");
  const [subcategory, setSubcategory] = useState(
    editedTransaction?.subcategory || ""
  );
  const [date, setDate] = useState(editedTransaction?.date || "");
  const [isSwitcherChecked, setIsSwitcherChecked] = useState(
    editedTransaction?.date ? true : false
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    setDescription(editedTransaction?.description || "");
    setValue(editedTransaction?.price || "");
    setCategory(editedTransaction?.category || "");
    setSubcategory(editedTransaction?.subcategory || "");
    setDate(editedTransaction?.date || "");
    setIsSwitcherChecked(editedTransaction?.date ? true : false);
  }, [editedTransaction]);

  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleValueChange = (e) => setValue(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSubcategoryChange = (e) => setSubcategory(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleSwitcherChange = (e) => setIsSwitcherChecked(e.target.checked);

  const handleClick = () => {
    if (!description || isNaN(value) || value === "") {
      setError(true);
      return;
    }

    const transaction = {
      description,
      price: parseFloat(value),
      category,
      subcategory,
      date,
      isPositive: !isSwitcherChecked ? 1 : 0,
    };

    console.log(editedTransaction, "editedTransaction");

    if (editedTransaction?.id) {
      // Aktualizacja istniejącej transakcji
      const updatedTransaction = { ...transaction, id: editedTransaction.id };
      updateTransaction(updatedTransaction);

      console.log(transactions, "transactions");

      // Filtrowanie i aktualizacja stanu transakcji
      const filteredTransactions = transactions.filter(
        (t) => t?.id?.toString() !== editedTransaction?.id?.toString()
      );
      console.log(filteredTransactions, "Filtrowane", editedTransaction?.id);
      setTransaction([...filteredTransactions, updatedTransaction]);
    } else {
      // Dodanie nowej transakcji
      setTransaction([...transactions, transaction]);
      postTransaction(transaction);
    }

    //postTransaction(transaction);
    //updateTransaction(editedTransaction);
    //wywołanie update transaction, wywołać post transaction i update transaction w zaleznosci czy to edycja czy dodawanie nowego item, w fetchpost funckcja update transacion

    setDescription("");
    setValue("");
    setCategory("");
    setSubcategory("");
    setDate("");
    setError(false);
    setEditedTransaction(null);
  };

  return (
    <section className="budget_structure">
      {error && (
        <div className="error">
          Description can not be empty and value must be a number without any
          special chars.
        </div>
      )}
      <div className="inputs">
        <div className="switcher">
          <input
            type="checkbox"
            name="switcher"
            id="switcher"
            className="switcher_input"
            checked={isSwitcherChecked}
            onChange={handleSwitcherChange}
            aria-label="Switcher"
          />
          <label htmlFor="switcher" className="switcher_label"></label>
        </div>
        <div className="input">
          <input
            type="text"
            name="description"
            id="description"
            className="input_input"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <label htmlFor="description" className="input_label">
            Description
          </label>
        </div>
        <div className="input">
          <input
            type="number"
            name="value"
            id="value"
            className="input_input"
            placeholder="Value"
            min="0"
            value={value}
            onChange={handleValueChange}
          />
          <label htmlFor="value" className="input_label">
            Value
          </label>
        </div>
        <div id="transaction-form">
          <h1>
            <label htmlFor="category" className="input_label"></label>
            <select
              id="category"
              name="category"
              className="input_input"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="Daily">Daily</option>
              <option value="Seasonal">Seasonal</option>
              <option value="Others">Others</option>
            </select>{" "}
          </h1>
          <h2>
            <label htmlFor="subcategory" className="input_label"></label>
            <select
              id="subcategory"
              name="subcategory"
              className="input_input"
              value={subcategory}
              onChange={handleSubcategoryChange}
            >
              <option value="">Select Subcategory</option>
              <option value="Equipment">Equipment</option>
              <option value="Transport">Transport</option>
              <option value="Salaries">Salaries</option>
              <option value="Projects">Projects</option>
              <option value="Other">Other</option>
            </select>{" "}
          </h2>
          <h3>
            <label htmlFor="date" className="input_label"></label>
            <input
              type="date"
              id="date"
              name="date"
              className="input_input"
              value={date}
              onChange={handleDateChange}
            />{" "}
          </h3>
        </div>
        <div className="inputs_button">
          <button
            className="button"
            data-enter-button="data-enter-button"
            title="Enter"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="button_icon"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddTransaction;
