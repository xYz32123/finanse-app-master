// Funkcja wykonująca żądanie POST
export async function postTransaction(data) {
  try {
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Transaction successfully posted:", responseData);
  } catch (error) {
    console.error("Error posting transaction:", error);
  }
}
