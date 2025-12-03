function calculate() {
    let num1 = Number(prompt("Введіть перше число:"));
    let num2 = Number(prompt("Введіть друге число:"));
    let op = prompt("Виберіть операцію(+, -, /, *):");

    if (op === "+") {
        alert(num1 + num2);
    }

    else if (op === "-") {
        alert(num1 - num2);
    }

    else if (op === "/") {
        alert(num1 / num2);
    }

    else if (op === "*") {
        alert(num1 * num2);
    }

    else {
        alert("Invalid");
    }
}

calculate()
