import LoginForm from "../components/loginform";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe("Login Component Test", () => {
    it("Component Loads"), () => {
        render(<LoginForm/>);
        const loginPage = screen.getByTestId("login-1");
        expect(loginPage).toBeInTheDocument();
    }
})