import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import { AuthPage } from "./routes/auth_page/AuthPage";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import { Root } from "./Root";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { RecoilRoot, useRecoilState } from "recoil";
import { isAuthenticated } from "./routes/auth_page/store/isAuthenticated";
import { useSessionContext } from "./Router/SessionContext";
import ProtectedRoute, { ProtectedRouteProps } from "./Router/ProtectedRoute";
import { Dashboard } from "./routes/dashboard/Dashboard";
import { CreateInvoice } from "./routes/create_invoice/CreateInvoice";
// const token = localStorage.getItem("token") ?? "RANDOMSHAJT";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
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
    HOMEPAGE <Link to="/login">LOGIN HERE</Link>{" "}
  </div>
);

const getToken = () => sessionStorage.getItem("token");

function App() {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({ ...sessionContext, redirectPath: path });
  };

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: "/login",
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath,
  };

  useEffect(() => {
    updateSessionContext({
      ...sessionContext,
      isAuthenticated: Boolean(getToken()),
    });
  }, []);

  console.log(sessionContext, "sessionContext");

  return (
    <div>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />

          <ProtectedRoute
            {...defaultProtectedRouteProps}
            path="/dashboard"
            component={Dashboard}
          />
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            path="/invoices"
            component={CreateInvoice}
          />

          {/* <Root defaultProtectedRouteProps={defaultProtectedRouteProps} />

          {Boolean(sessionContext.isAuthenticated) && (
            <Redirect to="/dashboard" />
          )} */}

          <Route path="/login" component={AuthPage} />
        </Switch>
      </ApolloProvider>
    </div>
  );
}

export default App;
