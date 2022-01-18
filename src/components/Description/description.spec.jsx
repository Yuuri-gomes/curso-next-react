import { render, screen } from "@testing-library/react";
import { DescriptionComponent } from ".";
import { DescriptionPropsMock } from "./mock";

describe("<Description", () => {
  it("Should be a description", () => {
    render(<DescriptionComponent {...DescriptionPropsMock} />);

    expect(
      screen.getByText(DescriptionPropsMock.description)
    ).toBeInTheDocument();
  });
});
