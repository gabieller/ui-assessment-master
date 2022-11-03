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
    const title = screen.getByText(/Account Overview/i);
    const contact = screen.getByTestId("contact");
    const card = screen.getByTestId("card-sales");
    expect(title).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  });
});
