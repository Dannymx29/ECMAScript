//dinamic import

const button = document.getElementById('DI');

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

//bigint

const BigNumber = 9007199254740991n;
const anotherBigNumbre = BigInt(9007199254740991);

console.log(BigNumber);
console.log(anotherBigNumbre);

//Promise.allSettled()

const primise1 = new Promise((resolve,reject) => reject("reject"));
const primise2 = new Promise((resolve,reject) => reject("resolve"));
const primise3 = new Promise((resolve,reject) => reject("resolve 1"));

Promise.allSettled([primise1, primise2, primise3])
.then(response => console.log(response));

//globalThis

console.log(window);//navegador
console.log(globalThis);
//console.log(selft);//webworker
//console.log(global);//node

//Nullish coalescing operator (??)
const fooo = null ?? 'default string';
console.log(fooo);

const foooo = 'null' ?? 'default string';
console.log(foooo);


//Optional chaining (?.)

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email')
}else{
    console.log('fail');
}