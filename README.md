# Sephora Website Testing Project 🛍️
---

# ✅ Part 2 — Automation Script Submission
---

# ✅ How to Run the Script

## 1. Install Node.js

Download and install Node.js:

[https://nodejs.org](https://nodejs.org)

Method 1: Open the Cypress App (Visual Mode)
This opens a browser window so you can see the test happen live.

```bash
npm install
```
---
```bash
npx cypress open
```
---

## 🧪 Cypress Automation Code Breakdown

Here is an explanation of how basic actions and assertions are handled using Cypress during the UI automation phase.

### Code Snippet Example
```javascript
cy.get('input[placeholder="Your Name"]').should("be.visible").type("Randini Mendis");
```

---
📋 Explanation of Commands
1. cy.get('input[placeholder="Your Name"]')
Purpose: Finds the specific input field on the webpage.
Mechanism: Cypress searches the DOM for an <input> element that contains the placeholder text "Your Name".
Result: Selects the Name textbox so actions can be performed on it.

2. .should("be.visible")
Purpose: Asserts (checks) that the input field is visible on the screen.
Mechanism: Cypress automatically waits for the element to appear, preventing flaky errors if the page loads slowly.
Result: Ensures the user can actually see and interact with the textbox before typing.

3. .type("Randini Mendis")
Purpose: Enters text into the selected input field.
Mechanism: Simulates real user keystrokes typing into the input box.
Result: The Name field automatically fills up with the value "Randini Mendis".
---

```javascript
    38 | cy.pause();
```
##### line 38 - "The test stops here. You are free to solve the puzzle.
---

```javascript
 41|   cy.iframe('iframe[title="reCAPTCHA"]')
 42|     .find("#recaptcha-anchor", { timeout: 10000 })
 43|    .should("have.attr", "aria-checked", "true");
```

##### line 41 -When you press Resume (Play), the checkbox will wait until is checked correctly.
---

```javascript
45| cy.get("form").submit();
```
##### line 45 -Submit the form directly, without clicking the button!

---

```javascript
48| cy.contains("successfully", { timeout: 15000 }).should("be.visible");
```
##### line 48 -Assertion: Wait for the success message to appear on the site
---

