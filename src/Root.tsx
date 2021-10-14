import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from './Pages/Layout/Layout';
import ProtectedRoute, { ProtectedRouteProps } from './Router/ProtectedRoute';
import { CreateInvoice } from './routes/create_invoice/CreateInvoice';
import { Dashboard } from './routes/dashboard/Dashboard';

interface RootProps {
  defaultProtectedRouteProps: ProtectedRouteProps;
}

// eslint-disable-next-line react/prop-types
export const Root: React.VFC<RootProps> = ({ defaultProtectedRouteProps }) => (
  //
  <Layout>
    <Switch>
      <ProtectedRoute {...defaultProtectedRouteProps} component={Dashboard} path="/dashboard" />
      <ProtectedRoute {...defaultProtectedRouteProps} component={CreateInvoice} path="/invoices" />
    </Switch>
  </Layout>
);
