import JobSearch from "../components/jobsearch";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("JobSearch Component Test", () => {
        render(<JobSearch/>);
        const loginPage = screen.getByTestId("jobsearch-1");
        expect(loginPage).toBeInTheDocument();
    
})