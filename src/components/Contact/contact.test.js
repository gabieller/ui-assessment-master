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
    const name = screen.getByText(/Jane Doe/i);
    const email = screen.getByText(/janedoe@feefo.com/i);
    const phone = screen.getByText(/020 3362 4208/i);
    const title = screen.getByText(/Your feefo support contact/i);
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("should render correctly initial letters when name has one word", () => {
    render(
      <Contact name="Jane" email="janedoe@feefo.com" phone="020 3362 4208" />
    );
    const initialsElement = screen.getByTestId('contact-initials');
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
    const initialsElement = screen.getByTestId('contact-initials');
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
    const initialsElement = screen.getByTestId('contact-initials');
    expect(initialsElement).toHaveTextContent("JD");
  });
});
