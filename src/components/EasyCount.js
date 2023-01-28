import React from "react";

export default function CreateReceipt(t) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify({
      id: t.id,
      date: t.date,
      amount: t.amount,
      text: t.text
    })
  };

  fetch("http://localhost:6969/transaction", requestOptions)
    .then((res) => res.json())
    .then((response) => console.log("Success: ", response))
    .catch((error) => console.error("Error: ", error));
}
