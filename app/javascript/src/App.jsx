import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  Routes, Route,
} from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({ uri: "/graphql" });

const wsLink = new GraphQLWsLink(
  createClient({ url: "ws://localhost:8080/cable" })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

import Dashboard from "./containers/Dashboard/Dashboard.jsx";

const App = () => (
  <ApolloProvider client={client}>
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
        </Routes>
      </div>
    </ErrorBoundary>
  </ApolloProvider>
);

export default App;
