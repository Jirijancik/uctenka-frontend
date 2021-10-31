import { useQuery } from '@apollo/client';
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { GET_CLIENTS } from './graphql/queries/Client';
import { Layout } from './Pages/Layout/Layout';
import { ProtectedRoute } from './Router/ProtectedRoute';
import { useSessionContext } from './Router/SessionContext';
import { ClientsPage } from './routes/clients/Page';
import { Dashboard } from './routes/dashboard/Dashboard';
import { InvoicesRouter } from './routes/invoices/Router';

export const Root: React.VFC = () => {
  useQuery(GET_CLIENTS);
  const [sessionContext, updateSessionContext] = useSessionContext();
  console.log('yoho');
  return (
    <Layout>
      <Switch>
        <ProtectedRoute component={Dashboard} path="/dashboard" />
        <ProtectedRoute exact component={ClientsPage} path="/clients" />
        <ProtectedRoute exact component={InvoicesRouter} path="/invoice-issued" />
        <ProtectedRoute exact component={InvoicesRouter} path="/invoice-recieved" />
        <Redirect to="/dashboard" />
      </Switch>
    </Layout>
  );
};
