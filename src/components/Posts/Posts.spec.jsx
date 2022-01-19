import { render, screen } from "@testing-library/react";
import { PostsComponent } from ".";
import { PostsPropsMock } from "./mock";

describe("<Posts />", () => {
  it("should render posts", () => {
    render(<PostsComponent {...PostsPropsMock} />);

    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  it("should match snapshot", () => {
    const { container } = render(<PostsComponent {...PostsPropsMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
