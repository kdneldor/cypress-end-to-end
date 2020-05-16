import { boolean } from "yup";

describe("This is our first test!", () => {
  it("Should return true", () => {
    expect(true).to.equal(true);
  });
});

describe("Testing our form inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });
  it("Input Name into the Name Input", () => {
    //Arrange - Get the element
    //Act - Mimic User Interaction
    //Assert - Test/Verify
    cy.get('input[name="name"]')
      .type("Kyle Nelson")
      .should("have.value", "Kyle Nelson");
  });
  it("Input Email into the Email Input", () => {
    cy.get('[for="email"] > input')
      .type("kyle-nelson@lambdastudents.com")
      .should("have.value", "kyle-nelson@lambdastudents.com");
  });
  it("Check for Terms & Conditions Input", () => {
    cy.get('input[type="checkbox"]').check().should("be.checked");
  });
  it("Checks for form submission", () => {
    cy.get("form").submit();
  });
});

describe("If input is blank", () => {
  it("display form validation", () => {
    cy.get('textarea').type("Yolo").should("not.have.value", "").clear();
    cy.get("form").submit();
    cy.get(".error");
  });
});
