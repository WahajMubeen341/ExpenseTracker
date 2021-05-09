import React, { useContext, useReducer } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transactions) => transactions.transAmount);
  console.log("BALANCE",amounts)
  var totalBalance = 0;
  for (let index = 0; index < amounts.length; index++) {
    totalBalance += amounts[index];
  }

  return (
    <div>
      <h4>Current Balance</h4>
      <h1 style={{color:'black'}}>${totalBalance}</h1>
    </div>
  );
};
