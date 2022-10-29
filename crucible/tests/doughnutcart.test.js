import DoughnutChart from "../components/doughnutchart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("DoughnutChart Component Test", () => {
        render(<DoughnutChart/>);
        const loginPage = screen.getByTestId("doughnutchart-1");
        expect(loginPage).toBeInTheDocument();
    
})