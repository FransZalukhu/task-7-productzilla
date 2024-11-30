import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../component/Footer/footer";

describe("Footer Component", () => {
  it("renders copyright text correctly", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      /© 2024 Frans Zalukhu. All Rights Reserved./i
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    const githubLink = screen.getByText("GitHub");
    const linkedinLink = screen.getByText("LinkedIn");
    const emailLink = screen.getByText("Email");

    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/FransZalukhu"
    );
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/frans-zalukhu"
    );
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:fransdamai2020@gmail.com"
    );
  });

  it("has correct CSS classes", () => {
    render(<Footer />);
    const footerElement = screen
      .getByText(/© 2024 Frans Zalukhu. All Rights Reserved./i)
      .closest("footer");

    expect(footerElement).toHaveClass("bg-gray-800");
    expect(footerElement).toHaveClass("text-white");
    expect(footerElement).toHaveClass("py-8");
    expect(footerElement).toHaveClass("mt-auto");
  });
});
