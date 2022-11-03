import { render, screen } from "@testing-library/react";
import Tooltip from "./";

describe("Tooltip", () => {
  it("should render correctly", () => {
    render(<Tooltip content="Test tooltip content" />);
    const content = screen.queryByText(/Test tooltip content/i);
    const icon = screen.getByTestId("icon");
    expect(content).not.toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
