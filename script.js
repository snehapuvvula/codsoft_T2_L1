function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.innerText = display.innerText === '0' ? value : display.innerText + value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Ensure only valid characters are evaluated
        const result = Function('"use strict"; return (' + display.innerText.replace(/[^-()\d/*+.]/g, '') + ')')();
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
