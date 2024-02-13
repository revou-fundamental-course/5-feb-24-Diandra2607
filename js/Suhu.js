let Celsius = document.getElementById('Celsius');
let Fahrenheit = document.getElementById('Fahrenheit');

Konversi = () => {
    let output = (parseFloat(Celsius.value)*(9/5))+32;
    Fahrenheit.value = parseFloat(output.toFixed(4));
}

Reverse = () => {
    let output = (parseFloat(Fahrenheit.value)-32)*(5/9);
    Celsius.value = parseFloat(output.toFixed(4));
}
const Reset = () => {
Celsius.value = " ";
Fahrenheit.value = " ";
}
