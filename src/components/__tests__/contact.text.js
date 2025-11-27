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
test("should load input name inside Contact component", ()=>{
    render(<Contact/>);
    const input = screen.getByPlaceholderText('name');
    expect(input).toBeInTheDocument();
});
test("Should load 2 input boxes on Contact Component",()=>{
    render(<Contact/>);
    //Quering
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length)
    // Assertion
    expect(inputBoxes.length).toBe(2);
})