import AboutTheDevs from "../components/aboutthedevs";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("About The Devs Component Test", () => {
        render(<AboutTheDevs/>);
        const loginPage = screen.getByTestId("aboutthedevs-1");
        expect(loginPage).toBeInTheDocument();
    
})