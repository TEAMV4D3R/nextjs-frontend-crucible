/// <reference types="cypress" />

describe('App Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("logs into the website", () => {
        cy.get('input[name="username"').type("v4d3r")
        cy.get('input[name="password"').type("v4d3r")
        cy.get("button").click({ multiple: true })
        cy.get("title").should("have.text", "My Jobs")
    })
})