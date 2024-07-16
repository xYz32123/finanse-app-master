import { useState, useEffect } from "react";
import "./index.css";

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
      id: Math.floor(Math.random() * 100000),
      description,
      price: parseFloat(value),
      category,
      subcategory,
      date,
      isPositive: !isSwitcherChecked,
    };

    setTransaction([...transactions, transaction]);
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
          Description can't be empty and value must be a number without any
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
        <div id="transaction-div">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            <option value="Daily">Daily</option>
            <option value="Seasonal">Seasonal</option>
            <option value="Others">Others</option>
          </select>
          <label htmlFor="subcategory">Subcategory</label>
          <select
            id="subcategory"
            name="subcategory"
            value={subcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="">Select Subcategory</option>
          </select>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
          />
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
