import NewUser from "../components/newuser";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("NewUser Component Test", () => {
        render(<NewUser/>);
        const loginPage = screen.getByTestId("newuser-1");
        expect(loginPage).toBeInTheDocument();
    
})