    const display = document.getElementById("display");

    function appendToDisplay(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

    // Keyboard support
    display.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        calculate();
      }
    });
