/*********** 1 Zadanie **********/

const elements = [1, 2, 5, 6, 88, 5];
let sum = 0;

for (let i = 0; i < elements.length; i++){
    sum += elements[i];
}
console.log(sum);

/*********** 2 Zadanie **********/

const elements1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum1 = 0;
let sumSums = 0
for (let i = 0; i < elements1.length; i++){
    sum1 = elements1[i] * elements1[i]
    sumSums += sum1;
}
console.log(sumSums);

/*********** 3 Zadanie **********/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const newNumbers = [];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        newNumbers.push(numbers[i]);
    }
}
console.log(newNumbers);