//operador de reposo extrae las propiedades de un objeto no construido

const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX'
}

let {name, ...all} = obj;
console.log(name,all);

//propiedades de propagacion

const obj2 = {
    name: 'lalo',
    age: 23,
}
const obj2a = {
    ...obj2,
    country: 'CO'
}

console.log(obj2a);

//promise.finalli

const helloworld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => { resolve('hello world') }, 3000)
        : reject (new Error('Test error'))
    });
};

helloworld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'));

//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year,month,day);