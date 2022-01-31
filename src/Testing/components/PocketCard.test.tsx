import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import PocketCard from "../../components/PocketCard";
import { bulbasaur } from "../mock";

describe("PocketCard Component", () => {
  test("Image should be shown", () => {
    render(
      <BrowserRouter>
        <PocketCard
          username={bulbasaur.username}
          name={bulbasaur.name}
          image={bulbasaur.image}
          types={bulbasaur.types}
        />
      </BrowserRouter>
    );

    const images = screen.getByRole("img");
    expect(images).toHaveAttribute("src", bulbasaur.image);
    expect(images).toHaveAttribute("alt", bulbasaur.name);
  });

  test("Name should be shown", () => {
    render(
      <BrowserRouter>
        <PocketCard
          username={bulbasaur.username}
          name={bulbasaur.name}
          image={bulbasaur.image}
          types={bulbasaur.types}
        />
      </BrowserRouter>
    );

    const title = screen.getByText(`(${bulbasaur.name})`);
    expect(title).toBeInTheDocument();
  });

  test("Username should be shown", () => {
    render(
      <BrowserRouter>
        <PocketCard
          username={bulbasaur.username}
          name={bulbasaur.name}
          image={bulbasaur.image}
          types={bulbasaur.types}
        />
      </BrowserRouter>
    );

    const username = screen.getByText(bulbasaur.username);
    expect(username).toBeInTheDocument();
  });

  test("Types should be shown", () => {
    render(
      <BrowserRouter>
        <PocketCard
          username={bulbasaur.username}
          name={bulbasaur.name}
          image={bulbasaur.image}
          types={bulbasaur.types}
        />
      </BrowserRouter>
    );

    const typeOne = screen.getByText(bulbasaur.types[0].type.name);
    expect(typeOne).toBeInTheDocument();
    const typeTwo = screen.getByText(bulbasaur.types[1].type.name);
    expect(typeTwo).toBeInTheDocument();
  });

  test("Button exist", () => {
    render(
      <BrowserRouter>
        <PocketCard
          username={bulbasaur.username}
          name={bulbasaur.name}
          image={bulbasaur.image}
          types={bulbasaur.types}
        />
      </BrowserRouter>
    );

    const release = screen.getByText("Release Pokemon");
    expect(release).toBeInTheDocument();
  });

  test("Navigation test", () => {
    render(
      <BrowserRouter>
        <PocketCard
          username={bulbasaur.username}
          name={bulbasaur.name}
          image={bulbasaur.image}
          types={bulbasaur.types}
        />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("div-navigate"));
    expect(window.location.pathname).toEqual(`/detail/${bulbasaur.name}`);
  });
});
