import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Pocket from "../../pages/Pocket";

describe("Pocket Page", () => {
  test("Empty list handler should be shown", async () => {
    render(
      <BrowserRouter>
        <Pocket />
      </BrowserRouter>
    );
    const icon = screen.getByAltText("pokeload");
    expect(icon).toHaveAttribute("src", "pokeload.gif");
    expect(icon).toHaveAttribute("alt", "pokeload");
    const linkElement = screen.getByText(
      /Oops! You didn't caught any pokemons yet./i
    );
    expect(linkElement).toBeInTheDocument();
  });

  test("Button redirect should be shown", async () => {
    render(
      <BrowserRouter>
        <Pocket />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/find the pokemons/i));
    expect(window.location.pathname).toEqual("/");
  });
});
