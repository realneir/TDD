import React from "react";
import { render, screen, cleanup, fireEvent} from "@testing-library/react";
import Oncet from "../Oncet";
import '@testing-library/jest-dom';
import Card from "../components/Card";


describe("Check the UI of Menu", () => {
	afterEach(cleanup);
	it ("has products",()=> {
		render(<Oncet/>);
        const val = screen.getByTestId("product");
		expect(val).toBeInTheDocument();
	})
	it ("has a sort list",()=> {
		render(<Oncet/>);
        const val = screen.getByTestId("sort");
		expect(val).toBeInTheDocument();
	})
	it ("has a displayed loading img",()=> {
		render(<Oncet/>);
        const val = screen.getByTestId("loader");
		expect(val).toBeInTheDocument();
	})
	// it ("has the add to cart buttons for each item", async ()=> {
	// 	render(<Card/>);
    //     const btns = await screen.getAllByTestId("addtocart");
	// 	expect(btns.length).toEqual(12);
	// })
});
