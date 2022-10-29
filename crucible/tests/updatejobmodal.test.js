import UpdateJobModal from "../components/updatejobmodal";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test.skip("Update Job Modal Component Test", () => {
        // render(<UpdateJobModal/>);
        const loginPage = screen.getByTestId("updatejobmodal");
        expect(loginPage).toBeInTheDocument();
    
})