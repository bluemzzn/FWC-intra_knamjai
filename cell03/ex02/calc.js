const left = document.getElementById("left");
const right = document.getElementById("right");
const operator = document.getElementById("operator");
const button = document.getElementById("calculate");

button.addEventListener("click", function () {
    const leftValue = Number(left.value);
    const rightValue = Number(right.value);
    const op = operator.value;

    if (
        left.value === "" ||
        right.value === "" ||
        !Number.isInteger(leftValue) ||
        !Number.isInteger(rightValue) ||
        leftValue < 0 ||
        rightValue < 0
    ) {
        alert("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && rightValue === 0) {
        alert("It's over 9000!");
        return;
    }

    let result;

    if (op === "+") {
        result = leftValue + rightValue;
    } else if (op === "-") {
        result = leftValue - rightValue;
    } else if (op === "*") {
        result = leftValue * rightValue;
    } else if (op === "/") {
        result = leftValue / rightValue;
    } else if (op === "%") {
        result = leftValue % rightValue;
    }

    alert(result);
    console.log(result);
});