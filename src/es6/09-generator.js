
function* interate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = interate(['oscar', 'david', 'ana', 'ulises', 'jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);