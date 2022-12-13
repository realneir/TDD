import { render, screen, cleanup} from "@testing-library/react";

import Oncet from "./Oncet";


afterEach(cleanup);
describe("Check the UI of Navigation.",()=>{
	it("has a nav for the side bar",()=>{
		render(<Oncet/>);
		const nav= screen.getByTestId("add-to-cart");
		expect(nav).toBeInTheDocument();
	});
    it("has a button for the Cart",()=>{
		render(<Oncet/>);
		const btn= screen.getByTestId("toggle-btn");
		expect(btn).toBeInTheDocument();
	});
	it("has a button for the Categories", async ()=>{
		render(<Oncet/>);
        const btns = await screen.findAllByTestId("add-to-cart");
		expect(btns.length).toEqual(12);
	});
});

describe("Check the UI of Menu.",()=>{
    it("has a button for Add to cart", async ()=>{
		render(<Oncet/>);
		
        const users = await screen.findAllByTestId('size');
		expect(users.length).toEqual(3);
	});
    it("has all items", async ()=>{
        render(<Oncet/>);
        
        const itm = await screen.findAllByTestId('card');
        expect(itm.length).toEqual(9);
    });
});