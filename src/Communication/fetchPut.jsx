// Funkcja wykonująca żądanie PUT
export async function updateTransaction(data) {
  console.log(data, "Data");
  try {
    const response = await fetch(
      `http://localhost:3000/transactions/${data?.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Transaction successfully updated:", responseData);
  } catch (error) {
    console.error("Error updating transaction:", error);
  }
}
