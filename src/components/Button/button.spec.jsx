import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonComponent } from ".";

describe("<Button />", () => {
  it("should render the button with the text 'Load More'", () => {
    render(<ButtonComponent text="Load More" />);

    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<ButtonComponent text="Load more" whenClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<ButtonComponent text="Load more" disabled={true} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeDisabled();
  });
});
