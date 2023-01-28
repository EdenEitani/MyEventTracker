import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const updateHistory = () => {
  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors"
  };

  fetch("http://localhost:6969/transaction", requestOptions)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        console.log(element);
        const newTransaction = {
          id: element.id,
          text: element.customer,
          date: element.date,
          amount: element.amount
        };
        if (!transactions.find((trans) => trans.id === newTransaction.id)) {
          addTransaction(newTransaction);
        }
      });
    })
    .then((response) => console.log("Success: ", response))
    .catch((error) => console.error("Error: ", error));
};

export const Header = () => {
  shouldComponentUpdate = () => false;
  return (
    <>
      <h2>Expense Tracker </h2>
      <p>{updateHistory()}</p>
    </>
  );
};
