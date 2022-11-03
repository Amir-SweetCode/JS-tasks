
/*************** 1 zadanie **************/
const example = [1, 2, 3];
const double_example = example.map(item => item * 2);
console.log(double_example);

const example1 = [4, 1, 1, 1, 4];
const double_example1 = example1.map(item => item * 2);
console.log(double_example1);

const example2 = [2, 2, 2, 2, 2, 2];
const double_example2 = example2.map(item => item * 2);
console.log(double_example2);


/*************** 2 zadanie **************/
function myFunc(array, value){
    const result = [];
    for (let i = 0; i < array; i++) {
        result.push(value);
    }
    return result;
};
console.log(myFunc(3, 'a'));


/*************** 3 zadanie **************/
function reverse(numbers) {
    let reverse_number = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reverse_number.push(numbers[i]);
    }
    return reverse_number;
}
let qwerty = [1,2,3,4,5,6,7,8,9];
console.log(reverse(qwerty));
