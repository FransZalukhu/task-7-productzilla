import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../component/Navbar/navbar";

test("renders Navbar correctly", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(screen.getByText("My Portfolio")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Projects")).toBeInTheDocument();
});

test("toggles mobile menu", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const menuButton = screen.getByRole("button");
  fireEvent.click(menuButton);
  expect(screen.getByText("Projects")).toBeVisible();
});
