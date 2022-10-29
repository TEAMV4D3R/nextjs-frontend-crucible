import Index from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe("Index Page Test", () => {
    it("Loads App Component"), () => {
        render(<Index/>);
        const indexPage = screen.getByTestId("index-page-1");
        expect(indexPage).toBeInTheDocument();
    }
})