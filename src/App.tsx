import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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

const token = localStorage.getItem("token");

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/" component={token ? Root : AuthPage} />
            <Route path="" component={PageNotFound} />
            <Redirect to="/dashboard" />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
