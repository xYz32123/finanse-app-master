export async function deleteTransaction(id) {
  try {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
      //  headers: {
      //    "Content-Type": "application/json",
      //  },
      //  body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Transaction successfully deleted:", responseData);
  } catch (error) {
    console.error("Error deleting transaction:", error);
  }
}
