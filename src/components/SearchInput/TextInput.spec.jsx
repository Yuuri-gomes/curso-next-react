import { fireEvent, render, screen } from "@testing-library/react";
import { SearchInputComponent } from ".";

describe("<SearchInputComponent />", () => {
  it("Should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<SearchInputComponent handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = "o valor";

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
  });

  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<SearchInputComponent handleChange={fn} searchValue={"testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe("testando");
  });
});
