import { render, screen } from "@testing-library/react";
import { PostCardComponent } from ".";
import { PostCardPropsMock } from "./mock";

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCardComponent {...PostCardPropsMock} />);

    expect(screen.getByAltText(PostCardPropsMock.title)).toHaveAttribute(
      "src",
      PostCardPropsMock.cover
    );

    expect(
      screen.getByRole("heading", { name: PostCardComponent.title })
    ).toBeInTheDocument();

    expect(screen.getByText(PostCardPropsMock.description)).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = render(<PostCardComponent {...PostCardPropsMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
