// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  let expression = ""; // Stores the input expression

  // Add event listeners to all buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.value;

      if (value === "C") {
        // Clear the display and reset the expression
        expression = "";
        display.value = "";
      } else if (value === "D") {
        // Delete the last character from the expression
        expression = expression.slice(0, -1);
        display.value = expression;
      } else if (value === "=") {
        // Evaluate the expression and display the result
        try {
          expression = eval(expression).toString(); // Evaluate the expression
          display.value = expression;
        } catch {
          display.value = "Error"; // Handle invalid expressions
          expression = "";
        }
      } else {
        // Append the value to the expression and update the display
        expression += value;
        display.value = expression;
      }
    });
  });
});
