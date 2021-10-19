import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { InvoiceIssuedRouter } from './invoice_issued/Router';
import { InvoiceRecievedRouter } from './invoice_recieved/Router';

export const InvoicesRouter: React.VFC = () => (
  <Switch>
    <Route exact component={InvoiceIssuedRouter} path="/invoice-issued" />
    <Route exact component={InvoiceRecievedRouter} path="/invoice-recieved" />
  </Switch>
);
