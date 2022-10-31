
const userSalaries = {
    Ella: 10000,
    Sophia: 20000,
    Ellie: 30000
};

let zpElla = userSalaries.Ella;
let zpSophia = userSalaries.Sophia;
console.log(zpElla, zpSophia);



const numbers = {
    a: 5,
    b: 6,
    c: 10
};
let sum = 0;
for (let qwerty in numbers){
    sum += numbers[qwerty];
}
console.log(sum);



let data = 0;
let number;
number = data ? 3 : 5;
console.log(number);