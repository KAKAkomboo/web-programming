let income = 10000;
let rent = 3000;
let food = 1500;
let transport = 1000;
let entertaiment = 2000;
let sum = rent + food + transport + entertaiment;
let saving = income - sum;

console.log("TotalExpenses: ", sum);
console.log("Saving: ", saving)
console.log("У вас залишилися гроші", saving > 0)
console.log("Ви в мінусі", saving < 0)
console.log("Ви витратили всі гроші", saving == 0)