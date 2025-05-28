const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const inputValue = textInput.value.trim();
    const cleaned = inputValue.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    
    // Limpia clases anteriores
    result.className = "";
    result.textContent = "";

    if (!inputValue) {
        alert("Please input a value");
        return;
    }

    if (inputValue.length === 1 || cleaned === [...cleaned].reverse().join("")) {
        result.textContent = `"${inputValue}" is a palindrome`;
        result.classList.add("palindrome");
        result.style.color = "#4CAF50"; //verde
    } else {
        result.textContent = `"${inputValue}" is not a palindrome`;
        result.classList.add("not-palindrome");
        result.style.color = "#ff4d4d"; //rojo
    }
});
