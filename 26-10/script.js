
/********** && (u) *************/
let age = 18;
let user = "alex"
let result = age > 10 && user === "sasha";
console.log(result);

let age1 = 18;
let user1 = "alex"
let result1 = age1 > 20 && user1 === "alex";
console.log(result1);

let age2 = 18;
let user2 = "alex"
let result2 = age2 > 20 && user2 === "sasha";
console.log(result2);

let age3 = 18;
let user3 = "alex"
let result3 = age3 > 10 && user3 === "alex";
console.log(result3);

/************ || (или) ************/
let age4 = 18;
let user4 = "alex"
let result4 = age4 > 10 || user4 === "sasha";
console.log(result4);

let age5 = 18;
let user5 = "alex"
let result5 = age5 > 20 || user5 === "alex";
console.log(result5);

let age6 = 18;
let user6 = "alex"
let result6 = age6 > 20 || user6 === "sasha";
console.log(result6);

let age7 = 18;
let user7 = "alex"
let result7 = age7 > 10 || user7 === "alex";
console.log(result7);

/************ Инкремент и декремент ************/
let num = 10;
num1 = num++;
num2 = ++num1;
num3 = num2--;
console.log(num3);

/************ Оператор присвоения ************/
let num4 = 47;
num4 += 7;
num4 -= 18;
num4 *= 10;
num4 /= 15;
alert(num4);

/************ Задача 3 ************/
let num5 = 1;
num5 += 12;
num5 -= 14;
num5 *= 5;
num5 /= 7;
num5 = ++num5;
num5 = --num5;
alert(num5);