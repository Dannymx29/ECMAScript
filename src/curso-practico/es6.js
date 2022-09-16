//funcion antes
function newfunctrion(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
//es6
function newfunctrion2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}
newfunctrion();
newfunctrion2('Ricardo', '23', 'CO');


console.log('\n');
console.log('\n');
//concatenacion 
let hello = "Hello";
let world = "World";
//antes
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


console.log('\n');
console.log('\n');
//multilinia
let lorem = "quiero escribir una frace epica\n otra frace epica"
//es6
let lorem2 = `esta es la nueva manera en la que
podemos colocar contenido sin 
concatenar y usar el eslas N esto es
gracias a las comillas`
console.log(lorem);
console.log(lorem2);


console.log('\n');
console.log('\n');
//destructuracion de elementos
let person = {
    'name' : 'oscar',
    'age' : 34,
    'country' : 'MX'
}
console.log(person.name,person.age,person.country);
//es6
let { name } = person;
console.log(name);


console.log('\n');
console.log('\n');
//operador de propagacion
let team1 =['oscar', 'julian', 'ricardo'];
let team2 =['valeria', 'yesica', 'camila'];
let educacion = [ 'David', ...team1, ...team2];
console.log(educacion);


console.log('\n');
console.log('\n');
//let y var -----> let solo se puede usar en el lugar donde se definio y var se puede usar donde sea
{
    var globalvar = "global var";
}
console.log(globalvar);
{
    let globallet = 'Global let'
    console.log(globallet);
}
//console.log(globallet);


console.log('\n');
console.log('\n');
//const -----> esta es una constante y no se puede volver a cambiar el valor
const a = 'b';
console.log(a);
//a = 'a'; -----> al querer reasignar marca el error


console.log('\n');
console.log('\n');
//propiedad de opjetos mejorada
let name2 = 'oscar';
let age2 = 34;
//es5
let obj = { name: name2, age: age2};
//es6
let obj2 = { name2, age2 };
console.log(obj);
console.log(obj2);


console.log('\n');
console.log('\n');
//arrow function
const names = [
    {
        name: 'Oscar',
        age: 32
    },
    {
        name: 'yesica',
        age: 27
    }
]
//antes
let listOfNames = names.map(function(item){
    console.log(item.name);
})
//ahora
let listOfNames2 = names.map(item => console.log(item.name));
/*otras opciones de arrow funciontion
const listOfNames3 = (name, age, country) => {
    ...
}
const listOfNames4 = name => {
    ...
}
const square = num => num * num;*/


//promesas asincronismo
const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}
helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error))


console.log('\n');
console.log('\n');
//clases
class calculator {
    //variables de la clase
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    //metodos de la clase
    suma(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    resta(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB;
    }
}
//convertimos la clase en una constante
const calc = new calculator();
//asi podemos llamar a la clase y sus metodos internos
console.log(calc.suma(2,2));
console.log(calc.resta(10,5));


console.log('\n');
console.log('\n');
//modulos import y export
/*import hello from './module';

hello();*/


console.log('\n');
console.log('\n');
//generadores
function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if (true){
        yield 'world';
    }
};
const generatorhello = helloWorld();
console.log(generatorhello.next().value);
console.log(generatorhello.next().value);
console.log(generatorhello.next().value);


