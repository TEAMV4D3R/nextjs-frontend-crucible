import CrucibleAdmin from "../components/crucibleadmin";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("Crucible Admin Component Test", () => {
        render(<CrucibleAdmin/>);
        const loginPage = screen.getByTestId("crucibleadmin-1");
        expect(loginPage).toBeInTheDocument();
    
})