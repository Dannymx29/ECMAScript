//declarando
class User {};
//instancia de clase
//const newUser = new User();

class usser{
    //metodos
    greeting(){
        return 'hola';
    }
};

const gndx = new usser();
console.log(gndx.greeting());
const bebeloper = new usser();
console.log(bebeloper.greeting());

//constructor

class user {
    //cosntructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'hola';
    }
}

const david = new user();

//this hace referencia al elemento padre que lo contiene

class USer {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'hola';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new USer('ana');
console.log(ana.greeting());

//setters getters

class UsEr{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'hola';
    }
    greeting(){
    return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}
const bebeloper2 = new UsEr('David', 15);
console.log(bebeloper2.uAge);
console.log(bebeloper2.uAge = 20)