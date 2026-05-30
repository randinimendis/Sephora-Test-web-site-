// import iframe support
import "cypress-iframe";

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

    // Fill Phone Number field
    cy.get('input[placeholder="Phone Number"]')
      .should("be.visible")
      .type("+94761037727");

    // Fill Message field
    cy.get('textarea[placeholder="Your Message"]')
      .should("be.visible")
      .type(
        "Hello, I would like to get more information about your safety services.",
      );

    // Click reCAPTCHA checkbox
    cy.frameLoaded('iframe[title="reCAPTCHA"]');
    cy.iframe('iframe[title="reCAPTCHA"]').find("#recaptcha-anchor").click();

    // Pause test for manual CAPTCHA verification
    cy.pause();

    // Verify CAPTCHA checked
    cy.iframe('iframe[title="reCAPTCHA"]')
      .find("#recaptcha-anchor", { timeout: 10000 })
      .should("have.attr", "aria-checked", "true");

    // Submit form
    cy.get("form").submit();

    // Verify success message
    cy.contains("successfully", { timeout: 15000 }).should("be.visible");
  });
});
