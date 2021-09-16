import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreateInvoice } from "./routes/create_invoice/CreateInvoice";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Switch>
              <Route path="/" component={CreateInvoice} />

              <Route path="/users" />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
