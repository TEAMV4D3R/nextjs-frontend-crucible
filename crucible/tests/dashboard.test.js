import Dashboard from "../components/dashboard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("Dashboard Component Test", () => {
        render(<Dashboard/>);
        const loginPage = screen.getByTestId("dashboard-1");
        expect(loginPage).toBeInTheDocument();
    
})