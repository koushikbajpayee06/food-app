import { Provider } from 'react-redux'
import Header from '../Header';
import appStore from "../../utills/appStore"
import { render ,screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

it("Should render Header Component With a login Button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>        
        </BrowserRouter>

    );

    // const loginButton =  screen.getByRole("button");
    const loginButton=screen.getByText("Login",{name:"Login"})
    expect(loginButton).toBeInTheDocument()
});

it("Should render Header Component With a Cart items 0", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>        
        </BrowserRouter>

    );

    // const loginButton =  screen.getByRole("button");
    const cartItems = screen.getByText("Cart-(0 items)");
    expect(cartItems).toBeInTheDocument()
});