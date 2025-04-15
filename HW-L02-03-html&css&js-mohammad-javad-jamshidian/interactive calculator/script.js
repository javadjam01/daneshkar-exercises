const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let Input = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (button.classList.contains("number") || button.classList.contains("operator") || button.classList.contains("sign")) {
            Input += value;
            display.textContent = Input;
        }

        if (button.classList.contains("clear")) {
            Input = "";
            display.textContent = "0";
        }

        if (button.classList.contains("equal")) {
            try {
                Input = eval(Input).toString();
                display.textContent = Input;
            } catch {
                display.textContent = "Error";
                Input = "";
            }
        }
    });
});