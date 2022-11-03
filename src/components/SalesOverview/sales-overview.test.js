import { render, screen } from "@testing-library/react";
import SalesOverview from "./";

const mockData = {
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

describe("Sales Overview", () => {
  it("should render correctly", () => {
    render(<SalesOverview salesOverview={mockData.salesOverview} />);
    const salesTitle = screen.getByText(/Sales/i);
    const subtitle = screen.getByTestId("subtitle");
    const tooltip = screen.getByTestId("tooltip");
    const percent = screen.getAllByTestId("percent-value");
    const percentTitle = screen.getAllByTestId("percent-title");

    expect(salesTitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent("You had 8 uploads and 4 lines added");
    expect(tooltip).toBeInTheDocument();
    expect(percent[0]).toHaveTextContent("38%");
    expect(percent[1]).toHaveTextContent("20%");
    expect(percentTitle[0]).toHaveTextContent("upload success");
    expect(percentTitle[1]).toHaveTextContent("lines added");
  });
});
