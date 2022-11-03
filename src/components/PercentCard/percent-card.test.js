import { render, screen } from "@testing-library/react";
import PercentCard from "./";

describe("Contact", () => {
  it("should render correctly", () => {
    render(<PercentCard title="Test" total={20} partial={5} />);
    const title = screen.getByText(/Test/i);
    const percent = screen.getByText(/25%/i);
    expect(title).toBeInTheDocument();
    expect(percent).toBeInTheDocument();
  });

  it("should render correctly percent value", () => {
    render(<PercentCard title="Test" total={20} partial={4} />);
    const percentElement = screen.getByTestId("percent");
    expect(percentElement).toHaveTextContent("20%");
  });
});
