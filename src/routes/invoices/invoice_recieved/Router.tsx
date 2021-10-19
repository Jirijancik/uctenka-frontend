import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreateInvoiceRecieved } from './create_invoice/CreateInvoice';

export const InvoiceRecievedRouter: React.VFC = () => (
  <Switch>
    <Route component={CreateInvoiceRecieved} path="/invoice-recieved" />
  </Switch>
);
