import App from "../components/app";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("App Component Test", () => {
        render(<App/>);
        const loginPage = screen.getByTestId("app-1");
        expect(loginPage).toBeInTheDocument();
    
})