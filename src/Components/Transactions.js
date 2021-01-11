import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";


export const Transactions = ({ transaction }) => {
  console.log("In transactions", transaction)
  
   
  const {deleteTransaction} = useContext(GlobalContext);
  const sign = transaction.transAmount < 0 ? "-" : "+";
  
  
  
  return (
    <li className={transaction.transAmount < 0 ? 'minus' : 'plus' }>
      
       {transaction.desc}
        <span>
          {sign}${Math.abs(transaction.transAmount)}
        </span>
        <button
         onClick={()=>{deleteTransaction(transaction.id)}}
         className="delete-btn">x</button>
      
    </li>
  );
};
