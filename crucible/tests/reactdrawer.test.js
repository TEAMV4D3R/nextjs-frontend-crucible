import ReactDrawer from "../components/reactdrawer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test.skip("ReactDrawer Component Test", () => {
        render(<ReactDrawer/>);
        const loginPage = screen.getByTestId("reactdrawer-1");
        expect(loginPage).toBeInTheDocument();
    
})