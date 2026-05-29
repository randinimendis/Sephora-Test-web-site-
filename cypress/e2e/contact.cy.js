describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://safora.se/en/contact.html");

    // Scroll to contact form
    cy.get("form").scrollIntoView();

    // Fill Name field
    cy.get('input[placeholder="Your Name"]')
      .should("be.visible")
      .type("Randini Mendis");

    // Fill Email field
    cy.get('input[placeholder="Email Address"]')
      .should("be.visible")
      .type("randini@gmail.com");
  });
});
