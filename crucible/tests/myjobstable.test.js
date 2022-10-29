import MyJobsTable from "../components/myjobstable";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test.skip("My Jobs Table Component Test", () => {
        // render(<MyJobsTable>);
        const loginPage = screen.getByTestId("myjobstable-1");
        expect(loginPage).toBeInTheDocument();
    
})