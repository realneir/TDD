import React from "react";
import { render, screen, cleanup} from "@testing-library/react";
import Oncet from "./Oncet";

afterEach(cleanup);
describe("Check the UI of Header", () => {
	it ("has a logo for the application", ()=> {
		render(<Oncet/>);
		const val = screen.getByTestId("logo");
		expect(val).toBeInTheDocument();
	})
	it ("has the categories", async ()=> {
		render(<Oncet/>);
        const btns = await screen.getAllByTestId("navbtns");
		expect(btns.length).toEqual(3);
	})
	it ("has a nav button for the cart", async ()=> {
		render(<Oncet/>);
		const btns = await screen.getByTestId("navcart");
		expect(btns).toBeInTheDocument();
	})
})

afterEach(cleanup);
describe("Check the UI of Menu.",()=>{
    it("has a button for Add to cart", async ()=>{
		render(<Oncet />);
		
        const users = await screen.getAllByTestId('addtocart');
		expect(users.length).toEqual(9);
	});
    it("has all items", async ()=>{
        render(<Oncet />);
        
        const itm = await screen.getAllByTestId('product');
        expect(itm.length).toEqual(9);
    });
});

describe("Check the UI of Cart.",()=>{
    it("has a button for Checkout", async ()=>{
		render(<Oncet />);
		
        const users = await screen.getAllByTestId('addtocart');
		expect(users.length).toEqual(9);
	});
    it("has all items", async ()=>{
        render(<Oncet />);
        
        const itm = await screen.getAllByTestId('product');
        expect(itm.length).toEqual(9);
    });
});