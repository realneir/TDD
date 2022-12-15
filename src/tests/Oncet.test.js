import React from "react";
import { render, screen, cleanup} from "@testing-library/react";
import Oncet from "../Oncet";
import '@testing-library/jest-dom';

describe("Checking the UI of Food Shop", () => {
	afterEach(cleanup);
	it ("has a header", ()=> {
		render(<Oncet/>);
		const val = screen.getByTestId("nav");
		expect(val).toBeInTheDocument();
	})
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
		const btns = screen.getByTestId("navcart");
		expect(btns).toBeInTheDocument();
	})
	it ("has a footer", ()=> {
		render(<Oncet/>);
		const val = screen.getByTestId("footer");
		expect(val).toBeInTheDocument();
	})
	it ("has a content on footer", ()=> {
		render(<Oncet/>);
		const val = screen.getByTestId("footercontent");
		expect(val).toBeInTheDocument();
	})
	it ("has a bottom details on footer", ()=> {
		render(<Oncet/>);
		const val = screen.getByTestId("btmdetails");
		expect(val).toBeInTheDocument();
	})
})
