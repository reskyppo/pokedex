import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFound from "../../pages/NotFound";

describe("404 NotFound Page", () => {
  test("Image gif should not be shown", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", "pokeload.gif");
    expect(icon).toHaveAttribute("alt", "pokeload");
  });

  test("message should be shown", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Oops looks like you got lost/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Button can be clicked and navigate to homepage", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/find your way home/i));
    expect(window.location.pathname).toEqual("/");
  });
});
