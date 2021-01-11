import './App.css';

import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import { AccountSummary } from './Components/AccountSummary';
import {TransactionHistory} from './Components/TransactionHistory';

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

//import GlobalProvider
import {GlobalProvider} from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <div className="App" style={{display:"flex", justifyContent:"center",}}>
    
      <div className="container">
      <Header/>
     
      <Balance/>
     

      <AccountSummary/>
      <TransactionHistory/>
      
      
     
      </div>
       
    </div>
    </GlobalProvider>
  );
}

export default App;
