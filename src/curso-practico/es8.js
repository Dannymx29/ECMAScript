//Object entries

const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object values

const data2 = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//padding

const string = 'hello';
console.log(string.padStart(10, '-'));
console.log(string.padEnd(15, '-'));
console.log('food'.padEnd(15, '-'));

//async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve ('hello world'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async() =>{
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherfunction = async()=>{
    try{
        const hello = await helloWorld();
        console.log(hello)
    }catch(Error){
        console.log('Error');
    }
}

anotherfunction();