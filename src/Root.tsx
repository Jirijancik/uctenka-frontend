import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreateInvoice } from "./routes/create_invoice/CreateInvoice";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import { AuthPage } from "./routes/auth_page/AuthPage";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import { Layout } from "./Pages/Layout/Layout";
import { Dashboard } from "./routes/dashboard/Dashboard";

export function Root() {
  //
  return (
    <Layout>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/faktury">
          <CreateInvoice />
        </Route>
      </Switch>
    </Layout>
  );
}
