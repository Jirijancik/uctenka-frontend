import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreateInvoiceIssued } from './create_invoice/CreateInvoice';

export const InvoiceIssuedRouter: React.VFC = () => (
  //
  <Switch>
    <Route component={CreateInvoiceIssued} path="/invoice-issued" />
  </Switch>
);
