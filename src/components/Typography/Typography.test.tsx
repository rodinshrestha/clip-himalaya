import { render, screen } from "@/lib/test-utils";

import Typography, { Variant } from ".";

describe("Typography component", () => {
  const variants: Variant[] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
  ];

  it("renders children correctly", () => {
    render(<Typography as="p">Hello World</Typography>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("applies className and default as-class correctly", () => {
    render(
      <Typography as="h2" className="custom-class">
        Class Test
      </Typography>
    );
    const element = screen.getByText("Class Test");
    expect(element).toHaveClass("h2");
    expect(element).toHaveClass("custom-class");
  });

  it("renders correct HTML element for each variant", () => {
    variants.forEach((variant) => {
      const text = `Text ${variant}`;
      render(<Typography as={variant}>{text}</Typography>);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("uses default testId if not provided", () => {
    render(<Typography as="h3">Test Id</Typography>);
    expect(screen.getByTestId("typography-test-id")).toBeInTheDocument();
  });

  it("uses custom testId if provided", () => {
    render(
      <Typography as="h3" testId="custom-id">
        Custom Test
      </Typography>
    );
    expect(screen.getByTestId("custom-id")).toBeInTheDocument();
  });
});
