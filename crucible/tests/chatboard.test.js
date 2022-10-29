import Chatboard from "../components/chatboard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test("Chatboard Component Test", () => {
        render(<Chatboard/>);
        const loginPage = screen.getByTestId("chatboard-1");
        expect(loginPage).toBeInTheDocument();
    
})