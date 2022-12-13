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


