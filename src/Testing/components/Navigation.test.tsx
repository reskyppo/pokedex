import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";

describe("Navigation Component", () => {
  test("Button should be shown", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const btnHome = screen.getByText(/Home/i);
    const btnBag = screen.getByText(/Pokebag/i);
    expect(btnHome).toBeInTheDocument();
    expect(btnBag).toBeInTheDocument();
  });

  test("Button can be clicked and navigate to specific location", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const btnHome = screen.getByText(/Home/i);
    fireEvent.click(btnHome);
    expect(window.location.pathname).toEqual("/");

    const btnBag = screen.getByText(/Pokebag/i);
    fireEvent.click(btnBag);
    expect(window.location.pathname).toEqual("/pocket");
  });

  test("Button icon", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const homeIcon = screen.getByAltText("Pokeball");
    expect(homeIcon).toHaveAttribute("src", "pokeball-icon.png");
    expect(homeIcon).toHaveAttribute("alt", "Pokeball");

    const bagIcon = screen.getByAltText("Bag");
    expect(bagIcon).toHaveAttribute("src", "bag-icon.png");
    expect(bagIcon).toHaveAttribute("alt", "Bag");
  });
});
