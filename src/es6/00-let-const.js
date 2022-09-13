var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

const animal ='dog';
//animal = 'cat'; Cunado quieres darle un nuevo valor a una costante te va marcar un error
console.log(animal);

const fruits = ()  => {
    if (true) 
    {
        var fruit1 = 'apple';//function scope - funciona de manera gobal
        let fruit2 = ' kiwi';//block scopes - solo funciona donde se declara
        const fruit3 = 'banana';//block scope
        console.log(fruit2);
    }
    console.log(fruit1);
    
    console.log(fruit3);
}
fruits();