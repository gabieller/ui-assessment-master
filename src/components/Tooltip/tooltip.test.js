import { render, screen } from "@testing-library/react";
import Tooltip from "./";

describe("Tooltip", () => {
  test.skip("should render correctly", () => {
    render(<Tooltip title="Test" total={20} partial={5} />);
    const title = screen.getByText(/Test/i);
    const percent = screen.getByText(/25%/i);
    expect(title).toBeInTheDocument();
    expect(percent).toBeInTheDocument();
  });


});
