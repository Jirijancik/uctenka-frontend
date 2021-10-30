import { useQuery } from '@apollo/client';
import React from 'react';
import { Switch } from 'react-router-dom';
import { GET_CLIENTS } from './graphql/queries/Client';
import { Layout } from './Pages/Layout/Layout';
import { ProtectedRoute, ProtectedRouteProps } from './Router/ProtectedRoute';
import { ClientsPage } from './routes/clients/Page';
import { Dashboard } from './routes/dashboard/Dashboard';
import { InvoicesRouter } from './routes/invoices/Router';

interface RootProps {
  defaultProtectedRouteProps: ProtectedRouteProps;
}

export const Root: React.VFC<RootProps> = ({ defaultProtectedRouteProps }) => {
  useQuery(GET_CLIENTS);
  console.log('yoho');
  return (
    <Layout>
      <Switch>
        <ProtectedRoute {...defaultProtectedRouteProps} component={Dashboard} path="/dashboard" />
        <ProtectedRoute {...defaultProtectedRouteProps} exact component={ClientsPage} path="/clients" />
        <ProtectedRoute {...defaultProtectedRouteProps} exact component={InvoicesRouter} path="/invoice-issued" />
        <ProtectedRoute {...defaultProtectedRouteProps} exact component={InvoicesRouter} path="/invoice-recieved" />
      </Switch>
    </Layout>
  );
};
