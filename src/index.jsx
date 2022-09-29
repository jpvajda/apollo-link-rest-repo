/*** APP ***/
import { RestLink } from 'apollo-link-rest'
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

// Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://swapi.dev/api/" });

// Setup your client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink

});

// Invoke the query and log the person's name
client.query({ query }).then(response => {
  console.log(response.data.person.name);
});


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
