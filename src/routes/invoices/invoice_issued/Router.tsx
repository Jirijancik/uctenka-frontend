import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSessionContext } from '../../../Router/SessionContext';
import { CreateInvoiceIssued } from './create_invoice/CreateInvoice';

export const InvoiceIssuedRouter: React.VFC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [sessionContext, updateSessionContext] = useSessionContext();
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', sessionContext);
  return (
    //
    <Switch>
      <Route component={CreateInvoiceIssued} path="/invoice-issued" />
    </Switch>
  );
};
