import React from "react";
import { render, screen, cleanup,} from "@testing-library/react";
import '@testing-library/jest-dom';
import Oncet from "../Oncet";
// import Cart from "../components/Cart";

describe("Check the UI of Cart", () => {
	afterEach(cleanup);
	it("has a cart to add items" , () => {
        render(<Oncet />); 
        const product = screen.getByTestId("cart");
        expect(product).toBeInTheDocument();
    });
	it("has a checkout " , () => {
        render(<Oncet />); 
        const val = screen.getByTestId("checkout");
        expect(val).toBeInTheDocument();
    });
	it("has a checkout button" , () => {
        render(<Oncet />); 
        const val = screen.getByTestId("checkoutbtn");
        expect(val).toBeInTheDocument();
    });
	// it("has a button to add quantity" , async () => {
    //     render(<CartItem />); 
    //     const btn = await screen.getByTestId("add");
    //     expect(btn).toBeTruthy();
    // });
	// it("has a button to deduct quantity" , async() => {
    //     render(<CartItem />); 
    //     const btn = await screen.getByTestId("minus");
    //     expect(btn).toBeTruthy();
    // });      
});
