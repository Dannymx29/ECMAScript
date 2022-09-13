let num = 5;

function square(num){
    return num * num;
    console.log(num)
}
console.log(square(num));

const square1 = (num) => {
    return num * num;
}
console.log(square1(num));

const square2 = num => num * num;
console.log(square2(num));