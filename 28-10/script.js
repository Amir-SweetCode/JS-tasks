

let x = 7;
if (x === 7){
    alert('Верно');
} else {
    alert('Неверно');
}


let a = 10;
let b = 2;
if (a >= 1 || b <= 3){
    alert(a + b);
} else {
    alert(a - b);
}


let time = +prompt("Введите ваше число от 0 до 59");
if (time >= 0 && time <= 14) {
    alert ("Первая");
} else if (time >= 15 && time <= 30) {
    alert ("Вторая");
} else if (time >= 31 && time <= 45) {
    alert ("Третья");
} else if (time >= 46 && time <= 59) {
    alert ("Четвертая");
} else {
    alert('Значение не попадает в диапазон от 0 до 59');        
}
