describe("form test", () => {
  it("tests that the form is working", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").should("be.disabled");

    cy.get('[for="name"] > input')
      .type("Kyle Nelson")
      .should("have.value", "Kyle Nelson");

    const email = "kyle.nelson@lambdaschool.com";
    cy.get('[for="email"] > input').type(email).should("have.value", email);

    const motivation = "I want to help others in the community";
    cy.get("textarea").type(motivation).should("have.value", motivation);

    cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");

    cy.get(".terms > input").click().should('have.checked', true);

    cy.get("button").should("not.be.disabled");

    cy.get('form').submit()
  });
});
