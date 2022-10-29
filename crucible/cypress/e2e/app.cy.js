/// <reference types="cypress" />

describe('My Jobs Components', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Logs into the website", () => {
        cy.get('input[name="username"').type("v4d3r")
        cy.get('input[name="password"').type("v4d3r")
        cy.get("button").click({ multiple: true })
        cy.get("title").should("have.text", "My Jobs")
    })
})


describe('Check Header', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Checks the Header title", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('h2[id="crucible-header"]').should("have.text", "CRUCIBLE")
    })
})


describe('Check Drawer', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Finds Welcome User in the Drawer", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('#drawer-icon').click()
        cy.get('h2[id="welcome-user"]').should("have.text", "Welcome V4d3r")
    })
})


describe('Check My Jobs Drawer', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Navigate to My Jobs", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('#drawer-icon').click()
        cy.get('#myjobs').should("have.text", "My Jobs")
        cy.get('#myjobs').click()
    })
})

describe('Check Dash Board Drawer', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Navigate to the Dashbaord", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('#drawer-icon').click()
        cy.get('#dashboard').should("have.text", "Dashboard")
        cy.get('#dashboard').click()
    })
})

describe('Check Job Search Drawer', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Navigate to Job Search", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('#drawer-icon').click()
        cy.get('#jobsearch').should("have.text", "Job Search")
        cy.get('#jobsearch').click()
    })
})

describe('Check Job Search Functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Navigate to Job Search", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('#drawer-icon').click()
        cy.get('#jobsearch').click()
        cy.get('#jobsearchbtn').should("have.text", "Search")
    })
})

describe('Check Chat Board in the Drawer', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Navigate to the Chat Board", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('#drawer-icon').click()
        cy.get('#chatboard').should("have.text", "Chat Board")
        cy.get('#chatboard').click()
    })
})

describe('Check About The Devs in the Drawer', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Navigate to the About The Devs", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('#drawer-icon').click()
        cy.get('#aboutthedevs').should("have.text", "About The Devs")
        cy.get('#aboutthedevs').click()
    })
})

describe('Check Login and Logout functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Navigate the drawer and logs out", () => {
        cy.get('input[name="username"]').type("v4d3r")
        cy.get('input[name="password"]').type("v4d3r")
        cy.get('button').click({ multiple: true })
        cy.get('#drawer-icon').click()
        cy.get('#logoutbutton').should("have.text", "Logout")
        cy.get('#logoutbutton').click()
    })
})

