
import React from "react";
import { render, screen, cleanup, waitFor, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import Oncet from "../Oncet";
import Cart from "../components/Cart";

describe("Check the Execution", () => {
	afterEach(cleanup);
	it("will execute the cart" , async () => {
        render(<Oncet />); 
        const btn = screen.queryByTestId("navcart")
        waitFor (() => fireEvent.click(btn).toBeInTheDocument());
    });
    it("will execute the checkout" , async () => {
        render(<Oncet />); 
        const btn = screen.queryByTestId("checkout")
        waitFor (() => fireEvent.click(btn).toBeInTheDocument());
    });
});
