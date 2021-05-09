import React,{useContext, useState} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { GlobalContext } from "../Context/GlobalState";


export const AccountSummary = () => {
  const {transactions}= useContext(GlobalContext);
  //const [totalIncome, setTotalIncome]= React.useState();
  //const [totalExpense, setTotalExpense] = React.useState();

 
  

  const amounts = transactions.map(transactions => transactions.transAmount);
  const total = amounts.reduce((acc, item)=> (acc += item), 0).toFixed(2);

  const income =  amounts.
  filter(i => i > 0).
  reduce((acc, i) => (acc += i),0).
  toFixed(2) ;
  //console.log('INCOME', income);
  //setTotalIncome(income.reduce((acc,item)=> (acc += item))); 
  //console.log('INCOME', totalIncome);
 const expense = amounts.filter(i => i < 0).reduce((acc, i) => (acc += i),0).toFixed(2) ;
  //console.log('EXPENSE', expense);
  //const totalExpense = Math.abs(expense.reduce((acc,item)=> (acc += item)) ) ; 
    //setTotalExpense(Math.abs(expense.reduce((acc,item)=> (acc += item)) ));

  

  return (
    <div style={{ display:"flex", justifyContent:"center",}}>
      <Card style={{width:'400px', display:"flex", justifyContent:"center", backgroundColor:'rgba(253, 255, 255,0.7)'}}>
        <CardContent>
          <div>
            <h2>Income</h2>
            <p style={{color:"green"}}>${income}</p>
          </div>
          </CardContent>
          <Divider orientation="vertical"  variant="middle" flexItem />
          <CardContent>
          <div>
            <h2>Expenses</h2>
            <p style={{color:"Red"}}>${expense}</p>
          </div>
          </CardContent>
      </Card>
    </div>
  
  );
  
};
