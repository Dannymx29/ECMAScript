const user = {usarname: 'gndx', age: 34, country: 'CO'};
const {usarname, ...value} = user;//aqui asignamos solo el username y el resto de los valores del objeto se va a value
console.log(usarname);
console.log(value);