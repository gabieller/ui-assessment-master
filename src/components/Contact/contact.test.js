import { render, screen } from "@testing-library/react";
import Contact from "./";

describe("Contact", () => {
  it("should render correctly", () => {
    render(
      <Contact
        name="Jane Doe"
        email="janedoe@feefo.com"
        phone="020 3362 4208"
      />
    );
    const title = screen.getByText(/Your feefo support contact/i);
    const name = screen.getByTestId("contact-name");
    const email = screen.getByTestId("contact-email");
    const phone = screen.getByTestId("contact-phone");
    const initials = screen.getByTestId("contact-initials");

    expect(title).toBeInTheDocument();
    expect(initials).toHaveTextContent("JD");
    expect(name).toHaveTextContent("Jane Doe");
    expect(email).toHaveTextContent("janedoe@feefo.com");
    expect(phone).toHaveTextContent("020 3362 4208");
  });

  it("should render correctly initial letters when name has one word", () => {
    render(
      <Contact name="Jane" email="janedoe@feefo.com" phone="020 3362 4208" />
    );
    const initialsElement = screen.getByTestId("contact-initials");
    expect(initialsElement).toHaveTextContent("J");
  });

  it("should render correctly initial letters when name has two words", () => {
    render(
      <Contact
        name="Jane Doe"
        email="janedoe@feefo.com"
        phone="020 3362 4208"
      />
    );
    const initialsElement = screen.getByTestId("contact-initials");
    expect(initialsElement).toHaveTextContent("JD");
  });

  it("should render correctly initial letters when name has three words", () => {
    render(
      <Contact
        name="Jane Maria Doe"
        email="janedoe@feefo.com"
        phone="020 3362 4208"
      />
    );
    const initialsElement = screen.getByTestId("contact-initials");
    expect(initialsElement).toHaveTextContent("JD");
  });
});
