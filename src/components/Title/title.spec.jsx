import { render, screen } from "@testing-library/react";
import { TitleComponent } from ".";
import { TitlePropsMock } from "./mock";

describe("<Title />", () => {
  it("Is a title", () => {
    render(<TitleComponent {...TitlePropsMock} />);

    expect(
      screen.getByRole("heading", { name: TitlePropsMock.title })
    ).toBeInTheDocument();
  });
});
