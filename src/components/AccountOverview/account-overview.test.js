import { render, screen } from "@testing-library/react";
import AccountOverview from "./";

const mockData = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

describe("AccountOverview", () => {
  it("should render correctly", () => {
    render(<AccountOverview data={mockData} />);

    //contact info
    const title = screen.getByText(/Account Overview/i);
    const info = screen.getByText(/Your feefo support contact/i);
    const name = screen.getByTestId("contact-name");
    const email = screen.getByTestId("contact-email");
    const phone = screen.getByTestId("contact-phone");
    const initials = screen.getByTestId("contact-initials");

    expect(title).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(initials).toHaveTextContent("JS");
    expect(name).toHaveTextContent(mockData.supportContact.name);
    expect(email).toHaveTextContent(mockData.supportContact.email);
    expect(phone).toHaveTextContent("020 3362 4208");

    //sales overview
    const salesTitle = screen.getByText(/Sales/i);
    const subtitle = screen.getByTestId("subtitle");
    const tooltip = screen.getByTestId("tooltip");
    const percent = screen.getAllByTestId("percent-value");
    const percentTitle  = screen.getAllByTestId("percent-title");
    
    expect(salesTitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent("You had 8 uploads and 4 lines added");
    expect(tooltip).toBeInTheDocument();
    expect(percent[0]).toHaveTextContent("38%");
    expect(percent[1]).toHaveTextContent("20%");
    expect(percentTitle[0]).toHaveTextContent("upload success");
    expect(percentTitle[1]).toHaveTextContent("lines added");

  });
});
