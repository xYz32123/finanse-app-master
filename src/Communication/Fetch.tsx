import { useEffect, useState } from "react";

export const useFetch = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const url = "http://localhost:3000/transactions";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json(); // tworzenie obiektu js z obiektu json
        setTransactions(json);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTransactions();
  }, []);
  return {
    transactions,
    setTransactions,
  };
};
