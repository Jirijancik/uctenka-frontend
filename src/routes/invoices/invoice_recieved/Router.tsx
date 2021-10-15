import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSessionContext } from '../../../Router/SessionContext';
import { CreateInvoiceRecieved } from './create_invoice/CreateInvoice';

// eslint-disable-next-line react/prop-types
export const InvoiceRecievedRouter: React.VFC = () => {
  console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDdd');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [sessionContext, updateSessionContext] = useSessionContext();
  return (
    //
    <>
      <Switch>
        <Route {...sessionContext} component={CreateInvoiceRecieved} path="/invoice-recieved" />
      </Switch>
    </>
  );
};
