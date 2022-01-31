import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from "../../pages/Home";
import { bulbasaur } from "../mock";

describe("Home Component", () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app",
    cache: new InMemoryCache(),
  });

  test("Image Loading should be shown", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ApolloProvider>
    );

    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", "pokeload.gif");
    expect(icon).toHaveAttribute("alt", "pokeload");
  });

  test("Pokemon name should be shown", async () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ApolloProvider>
    );

    const title = await screen.findByText(bulbasaur.name);
    expect(title).toBeInTheDocument();
  });

  test("Pokemon image should be shown", async () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ApolloProvider>
    );

    const images = await screen.findByAltText("bulbasaur");
    expect(images).toHaveAttribute("src", bulbasaur.image);
    expect(images).toHaveAttribute("alt", "bulbasaur");
  });
});
