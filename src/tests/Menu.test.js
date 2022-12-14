import React from "react";
import { render, screen, cleanup,} from "@testing-library/react";
import Oncet from "../Oncet";
import '@testing-library/jest-dom';


describe("Check the UI of Menu", () => {
	afterEach(cleanup);
	it ("has products",()=> {
		render(<Oncet/>);
        const val = screen.getByTestId("product");
		expect(val).toBeInTheDocument();
	})
	// it ("has the add to cart buttons for each item", async ()=> {
	// 	render(<Card />);
    //     const btns = await screen.getAllByTestId("addtocart");
	// 	expect(btns.length).toEqual(12);
	// })
});
