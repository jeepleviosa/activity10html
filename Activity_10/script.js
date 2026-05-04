function calculate() {
 const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        return;
    }

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;

    let quotient = "Undefined";
    let modulo = "Undefined";

    if (num2 !== 0) {
        quotient = (num1 / num2).toFixed(2); // 2 decimal places
        modulo = num1 % num2;
    }
     document.getElementById("sum").innerHTML =
        "The sum is: " + sum + "<br>" +
        "The difference is: " + difference + "<br>" +
        "The product is: " + product + "<br>" +
        "The quotient is: " + quotient + "<br>" +
        "The remainer is: " + modulo;
}
function clearFields(){
    document.getElementById("sum").innerHTML = " ";
}