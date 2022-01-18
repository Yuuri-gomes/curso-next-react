import { render, screen } from "@testing-library/react";
import { ImageComponent } from ".";
import { ImagePropsMock } from "./mock";

describe("<Image /", () => {
  it("Should be an image", () => {
    render(<ImageComponent {...ImagePropsMock} />);

    expect(screen.getByAltText(ImagePropsMock.title)).toHaveAttribute(
      "src",
      ImagePropsMock.cover
    );
  });
});
