import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import PokemonCard from "../../components/PokemonCard";
import { bulbasaur } from "../mock";

describe("PokemonCard Component", () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app",
    cache: new InMemoryCache(),
  });

  test("Image should be shown", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <PokemonCard name={bulbasaur.name} image={bulbasaur.image} url="-" />
        </BrowserRouter>
      </ApolloProvider>
    );

    const images = screen.getByRole("img");
    expect(images).toHaveAttribute("src", bulbasaur.image);
    expect(images).toHaveAttribute("alt", bulbasaur.name);
  });

  test("Pokemon name should be shown", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <PokemonCard name={bulbasaur.name} image={bulbasaur.image} url="-" />
        </BrowserRouter>
      </ApolloProvider>
    );

    const title = screen.getByText(bulbasaur.name);
    expect(title).toBeInTheDocument();
  });

  test("Owned total should be shown", () => {
    render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <PokemonCard name={bulbasaur.name} image={bulbasaur.image} url="-" />
        </BrowserRouter>
      </ApolloProvider>
    );

    const owned = screen.getByText(/Owned/);
    expect(owned).toBeInTheDocument();
  });
});
