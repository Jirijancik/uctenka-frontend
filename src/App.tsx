import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CreateInvoice } from './routes/create_invoice/App';

function App() {
  return (
    <div>
    <Router>
      <div>
        <Switch>
 
          <Route path="/" component={CreateInvoice}/>

          <Route path="/users" />

        </Switch>
      </div>
    </Router>
    </div>

  );
}

export default App;
