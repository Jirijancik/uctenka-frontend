import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSessionContext } from '../../Router/SessionContext';
import { InvoiceIssuedRouter } from './invoice_issued/Router';
import { InvoiceRecievedRouter } from './invoice_recieved/Router';

// eslint-disable-next-line react/prop-types
export const InvoicesRouter: React.VFC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [sessionContext, updateSessionContext] = useSessionContext();
  console.log('YEAAA');
  return (
    //
    <>
      <Switch>
        <Route exact component={InvoiceIssuedRouter} path="/invoice-issued" />
        <Route exact component={InvoiceRecievedRouter} path="/invoice-recieved" />
      </Switch>
    </>
  );
};
