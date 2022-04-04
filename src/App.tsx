import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Root } from './Root';
import { useSessionContext } from './Router/SessionContext';
import { AuthPage } from './routes/auth_page/AuthPage';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const App: React.VFC = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();

  // const setRedirectPath = useMemo(
  //   () => (path: string) => {
  //     updateSessionContext({ ...sessionContext, redirectPath: path });
  //   },
  //   [sessionContext, updateSessionContext],
  // );

  // const defaultProtectedRouteProps: ProtectedRouteProps = useMemo(
  //   () => ({
  //     isAuthenticated: !!sessionContext.isAuthenticated,
  //     authenticationPath: '/login',
  //     redirectPath: sessionContext.redirectPath,
  //     setRedirectPath,
  //   }),
  //   [],
  // );

  // useEffect(() => {
  //   updateSessionContext({
  //     //      ...defaultProtectedRouteProps,
  //     ...sessionContext,
  //     isAuthenticated: Boolean(getToken()),
  //   });
  // }, [sessionContext, updateSessionContext]);

  return (
    <div>
      <ApolloProvider client={client}>
        <Switch>
          {!sessionContext.isAuthenticated && <Route exact component={AuthPage} path="/login" />}

          <Root />
        </Switch>
      </ApolloProvider>
    </div>
  );
};

export default App;
