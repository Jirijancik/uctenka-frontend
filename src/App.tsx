import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Root } from './Root';
import { ProtectedRouteProps } from './Router/ProtectedRoute';
import { useSessionContext } from './Router/SessionContext';
import { AuthPage } from './routes/auth_page/AuthPage';
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
          <Route exact component={AuthPage} path="/login" />
          {/* <ProtectedRoute {...defaultProtectedRouteProps} component={Dashboard} path="/" />
          <ProtectedRoute {...defaultProtectedRouteProps} component={CreateInvoice} path="/invoices" /> */}

          <Root defaultProtectedRouteProps={defaultProtectedRouteProps} />
        </Switch>
      </ApolloProvider>
    </div>
  );
};

export default App;
