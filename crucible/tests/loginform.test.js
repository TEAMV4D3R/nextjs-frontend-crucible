import LoginForm from "../components/loginform";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test("Login Component Test", () => {
        render(<LoginForm/>);
        const loginPage = screen.getByTestId("login-1");
        expect(loginPage).toBeInTheDocument();
    
})