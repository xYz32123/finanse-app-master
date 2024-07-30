import { deleteTransaction } from "../../Communication/fetchDelete";
//import { updateTransaction } from "../../Communication/fetchPut";
import "./index.css";
export const ListItem = ({
  id,
  isPositive,
  description,
  price,
  category,
  subcategory,
  date,
  formatPrice,
  setTransaction,
  transactions,
  //editedTransaction,
  setEditedTransaction,
}) => {
  return (
    <li className="list_item" id={id}>
      <label className="item_label">
        <span>Description:</span>
        <p className="item_description" data-item-description>
          {description}
        </p>
      </label>
      <label className="item_label">
        <span>Value:</span>
        <p
          className={`item_value ${
            isPositive ? "item_value--income" : "item_value--expense"
          }`}
          data-item-value
        >
          {formatPrice(parseFloat(price), isPositive)}
        </p>
      </label>
      <label className="item_label">
        <span>Category:</span>
        <p className="item_category">{category}</p>
      </label>
      <label className="item_label">
        <span>Subcategory:</span>
        <p className="item_subcategory">{subcategory}</p>
      </label>
      <label className="item_label">
        <span>Date:</span>
        <p className="item_date">{date}</p>
      </label>
      <div className="item_buttons">
        <button
          className="item_button item_button--edit"
          data-edit-button
          title="Edit"
          onClick={() => {
            //updateTransaction();
            setEditedTransaction({
              id,
              description,
              price,
              category,
              subcategory,
              date,
            });
          }}
        ></button>
        <button
          className="item_button item_button--delete"
          data-delete-button
          title="Delete"
          onClick={() => {
            deleteTransaction(id);
            const newExpenses = transactions.filter(
              (expense) => expense.idtransactions !== id
            );
            console.log(newExpenses, id);
            setTransaction(newExpenses);
          }}
        ></button>
      </div>
    </li>
  );
};
