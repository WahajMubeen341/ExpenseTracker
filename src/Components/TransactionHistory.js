import { Divider } from "@material-ui/core";
import React, { useState, useContext } from "react";
import swal from "sweetalert";

//import GLobal Context
import { GlobalContext } from "../Context/GlobalState";

//import transactions
import { Transactions } from "./Transactions";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";
import { ControlCameraTwoTone } from "@material-ui/icons";

export const TransactionHistory = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [desc, setDes] = useState(null);
  const [trans, setTrans] = useState(null);
  //console.log(useContext(GlobalContext));
  const { transactions } = useContext(GlobalContext);
  console.log("t=", transactions);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ADD CLICKED", desc, trans);
    setDes(null);
    setTrans(null);

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      desc,
      transAmount: parseInt(trans)
    };
    console.log("to add", newTransaction)
    if ( (desc == null) || (trans == null)) {
      swal({
        text: "Add DESCRIPTION & AMOUNT",
        timer: 2000,
        icon: "warning",
        buttons: false,
      });
      
    }
    else{
      addTransaction(newTransaction);
    }
  };

  return (
    <div>
      <h3>Transaction History</h3>
      <Divider variant="middle" />

      <ul className="list">
        {transactions.map((obj) => (
          <Transactions key={obj.id} transaction={obj} />
        ))}
      </ul>

      <h3>Add new Transaction</h3>
      <Divider variant="middle" />

      <form onSubmit={onSubmit}>
        <Paper elevation={0} style={{backgroundColor:'rgba(253, 255, 255,0.9)'}}>
          <br />
          <span className="fields">
            <TextField
              id="description"
              label="Description"
              value={desc}
              type="text"
              onChange={(e) => {
                setDes(e.target.value);
              }}
              
              variant="outlined"
              size="small"
              color="primary"
            />
          </span>
          <br /> <br />
          <span className="fields"> 
            <TextField
              
              label="Amount + / - "
              type="text"
              value={trans}
              onChange={(e) => {
                setTrans(e.target.value);
              }}
              
              size="small"
              color="primary"
              variant="outlined"
            />
          </span>
          <br/>
         <span> <sub>(Add postive-Income || Add negative-Expense)</sub></span>
      
       
          <br /> <br />
        </Paper>
        <div>
          <Button className="btn" variant="contained" color="primary" type="submit" style={{maxWidth:"100px"}}>
            Add
          </Button>
          <br /> <br />
        </div>
      </form>
    </div>
  );
};
