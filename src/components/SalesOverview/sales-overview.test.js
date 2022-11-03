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
    render(<SalesOverview salesOverview={mockData} />);
    const tooltip = screen.getByTestId("tooltip");
    const title = screen.getByText(/Sales/i);
    const subtitle = screen.getByTestId("subtitle");
    const percent = screen.getByTestId("percent-card");
    expect(tooltip).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(percent).toBeInTheDocument();
  });

  // test.skip("should render icon", () => {
  //   render(<SalesOverview title="Test" total={20} partial={4} />);
  //   const percentElement = screen.getByTestId("percent");
  //   expect(percentElement).toHaveTextContent("20%");
  // });
});
