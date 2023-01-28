import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";
import CreateReceipt from "./EasyCount.js";

export const AddTransaction = () => {
  const [text, setText] = useState("Eden");
  const [amount, setAmount] = useState("50");

  const { addTransaction } = useContext(GlobalContext);

  function submitTransaction(transaction) {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      date: moment(new Date()).format("DD/MM/YYYY"),
      amount: +amount
    };

    setText("");
    setAmount("");

    addTransaction(newTransaction);
    if (amount > 0) {
      console.log("creating receipt");
      CreateReceipt(newTransaction);
    }

    transaction.preventDefault();
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={submitTransaction}>
          Add transaction
        </button>
      </form>
    </>
  );
};
