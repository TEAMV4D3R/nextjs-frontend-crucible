import BarChat from "../components/barchart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("BarChat Component Test", () => {
        render(<BarChat/>);
        const loginPage = screen.getByTestId("barchart-1");
        expect(loginPage).toBeInTheDocument();
    
})