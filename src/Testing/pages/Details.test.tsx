import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Details from "../../pages/Details";

describe("Details Page", () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app",
    cache: new InMemoryCache(),
  });

  test("Image loading should be shown", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </ApolloProvider>
    );

    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", "pokeload.gif");
    expect(icon).toHaveAttribute("alt", "pokeload");
  });
});
