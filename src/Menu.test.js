import React from "react";
import { render, screen, cleanup} from "@testing-library/react";
import Oncet from "./Oncet";
import '@testing-library/jest-dom';

describe("Check the UI of Menu", () => {
	afterEach(cleanup);
	it ("has menu items", async ()=> {
		render(<Oncet/>);
        const btns = await screen.getAllByTestId("product");
		expect(btns.length).toEqual(12);
	})
	it ("has the add to cart buttons", async ()=> {
		render(<Oncet />);
        const btns = await screen.getAllByTestId("addtocart");
		expect(btns.length).toEqual(12);
	})
});
