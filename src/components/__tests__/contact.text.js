import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test ("Should load contact us component",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
});
test("should load Button inside my Contact Component",()=>{
    render(<Contact/>)
    // const button = screen.getByRole('button');
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});
test("search input is present inside contuct component", ()=>{
    render(<Contact/>);
    const input = screen.getByPlaceholderText('name');
    expect(input).toBeInTheDocument();
});