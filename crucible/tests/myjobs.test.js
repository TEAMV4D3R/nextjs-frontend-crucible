import MyJobs from "../components/myjobs";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("MyJobs Component Test", () => {
        render(<MyJobs/>);
        const loginPage = screen.getByTestId("myjobs-1");
        expect(loginPage).toBeInTheDocument();
    
})