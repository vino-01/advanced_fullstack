 const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    let currentInput = "";

    buttons.forEach(button =>{
        button.addEventListener("click", () => {
            const value = button.innerText;

            if (value === "C") {
                currentInput = "";
                display.value = "";
                return;
            }

            if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                    display.value = currentInput;
                } catch (error) {
                    display.value = "Error";
                    currentInput = "";
                }
                return;
            }
 
            currentInput += value;
            display.value = currentInput;
        });
    });

