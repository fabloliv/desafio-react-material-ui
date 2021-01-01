import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://countries-274616.ew.r.appspot.com",
  }),
  cache,
});

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
