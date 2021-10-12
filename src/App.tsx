import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import { RecoilRoot, useRecoilState } from 'recoil';
import ProtectedRoute, { ProtectedRouteProps } from './Router/ProtectedRoute';
import { AuthPage } from './routes/auth_page/AuthPage';
import { Root } from './Root';
import { PageNotFound } from './Pages/PageNotFound/PageNotFound';
import { isAuthenticated } from './routes/auth_page/store/isAuthenticated';
import { useSessionContext } from './Router/SessionContext';
import { Dashboard } from './routes/dashboard/Dashboard';
import { CreateInvoice } from './routes/create_invoice/CreateInvoice';
// const token = localStorage.getItem("token") ?? "RANDOMSHAJT";

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  //  credentials: "include",
  // headers: {
  //   authorization: `Bearer ${token}`,
  // },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// if (Cookies.get("signedin")) {
//   // navigate("/private-area");
//   console.log("HAS THE SHIT");
// } else {
//   console.log("DOENST HAVE THE SHIT ");
// }

// const httpLink = createHttpLink({
//   uri: "http://localhost:8000/graphql",
//   credentials: "include",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = Cookies.get("token");

//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${token}`,
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

const Homepage = () => (
  <div>
    HOMEPAGE <Link to="/login">LOGIN HERE</Link>{' '}
  </div>
);

const getToken = () => sessionStorage.getItem('token');

const App: React.VFC = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({ ...sessionContext, redirectPath: path });
  };

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: '/login',
    redirectPath: sessionContext.redirectPath,
    setRedirectPath,
  };

  useEffect(() => {
    updateSessionContext({
      ...sessionContext,
      isAuthenticated: Boolean(getToken()),
    });
  }, []);

  console.log(sessionContext, 'sessionContext');

  return (
    <div>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact component={Homepage} path="/" />

          <ProtectedRoute {...defaultProtectedRouteProps} component={Dashboard} path="/dashboard" />
          <ProtectedRoute {...defaultProtectedRouteProps} component={CreateInvoice} path="/invoices" />

          {/* <Root defaultProtectedRouteProps={defaultProtectedRouteProps} />

          {Boolean(sessionContext.isAuthenticated) && (
            <Redirect to="/dashboard" />
          )} */}

          <Route component={AuthPage} path="/login" />
        </Switch>
      </ApolloProvider>
    </div>
  );
};

export default App;

// "devDependencies": {
//   "@babel/eslint-parser": "^7.15.4",
//   "@babel/preset-react": "^7.14.5",
//   "@typescript-eslint/eslint-plugin": "^4.31.0",
//   "@typescript-eslint/parser": "^4.31.0",
//   "eslint": "^7.32.0",
//   "eslint-config-airbnb": "^18.2.1",
//   "eslint-config-airbnb-typescript": "^14.0.0",
//   "eslint-config-george-lint": "1.0.2",
//   "eslint-config-prettier": "^8.3.0",
//   "eslint-plugin-html": "^6.1.2",
//   "eslint-plugin-import": "^2.24.2",
//   "eslint-plugin-jest": "^24.4.0",
//   "eslint-plugin-jsx-a11y": "^6.4.1",
//   "eslint-plugin-prettier": "^4.0.0",
//   "eslint-plugin-react": "^7.25.1",
//   "eslint-plugin-react-hooks": "^4.2.0",
//   "prettier": "^2.3.2"
// }
