import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from './Pages/Layout/Layout';
import ProtectedRoute, { ProtectedRouteProps } from './Router/ProtectedRoute';
import { Dashboard } from './routes/dashboard/Dashboard';
import { InvoicesRouter } from './routes/invoices/Router';

interface RootProps {
  defaultProtectedRouteProps: ProtectedRouteProps;
}

export const Root: React.VFC<RootProps> = ({ defaultProtectedRouteProps }) => (
  <Layout>
    <Switch>
      <ProtectedRoute {...defaultProtectedRouteProps} component={Dashboard} path="/dashboard" />
      <ProtectedRoute {...defaultProtectedRouteProps} exact component={InvoicesRouter} path="/invoice-issued" />
      <ProtectedRoute {...defaultProtectedRouteProps} exact component={InvoicesRouter} path="/invoice-recieved" />
    </Switch>
  </Layout>
);
