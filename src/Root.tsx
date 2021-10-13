import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import { AuthPage } from "./routes/auth_page/AuthPage";
import { CreateInvoice } from "./routes/create_invoice/CreateInvoice";
import { Layout } from "./Pages/Layout/Layout";
import { Dashboard } from "./routes/dashboard/Dashboard";
import ProtectedRoute, { ProtectedRouteProps } from "./Router/ProtectedRoute";

interface RootProps {
  defaultProtectedRouteProps: ProtectedRouteProps;
}

export const Root: React.VFC<RootProps> = ({ defaultProtectedRouteProps }) => (
  //
  <Layout>
    <Switch>
      <ProtectedRoute
        {...defaultProtectedRouteProps}
        component={Dashboard}
        path="/dashboard"
      />
      <ProtectedRoute
        {...defaultProtectedRouteProps}
        component={CreateInvoice}
        path="/invoices"
      />

      <Redirect to="/dashboard" />
    </Switch>
  </Layout>
);
