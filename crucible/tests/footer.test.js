import Footer from "../components/footer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("Footer Component Test", () => {
        render(<Footer/>);
        const loginPage = screen.getByTestId("footer-1");
        expect(loginPage).toBeInTheDocument();
    
})