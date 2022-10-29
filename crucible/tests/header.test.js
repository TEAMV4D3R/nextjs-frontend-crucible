import Header from "../components/header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("Header Component Test", () => {
        render(<Header/>);
        const loginPage = screen.getByTestId("header-1");
        expect(loginPage).toBeInTheDocument();
    
})