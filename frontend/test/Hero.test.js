import React from "react";
import { render, screen } from "@testng-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/Home/Hero";
describe("Heero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/HomeHero.png");
  });
});
