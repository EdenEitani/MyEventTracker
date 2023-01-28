import React, { useContext, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider, GlobalContext } from "./context/GlobalState";

function updateHistory() {
  console.log("In TransactionList");
  let { transactions } = useContext(GlobalContext);
  //const { addTransaction } = useContext(GlobalContext);
  //useEffect(() => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors"
  };
  console.log(transactions);

  fetch("http://localhost:6969/transaction", requestOptions)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((element) => {
        console.log(element);
        const newTransaction = {
          id: element.id,
          text: element.customer,
          date: element.date,
          amount: element.amount
        };
        if (!transactions.find((trans) => trans.id === newTransaction.id)) {
          console.log("Found new id");
          //addTransaction(newTransaction);
          transactions.push(newTransaction);
        }
      });
    })
    .then((response) => console.log("Success: ", response))
    .catch((error) => console.error("Error: ", error));
  //});
}

export default function App() {
  return (
    <GlobalProvider>
      <span>{updateHistory()}</span>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
