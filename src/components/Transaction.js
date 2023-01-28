import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = parseInt(num, 10).toFixed(2).split(".");
  return (
    "₪ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1] +
    "\t"
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  // const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} {transaction.date}
      <span>
        {/* {sign} */}
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};