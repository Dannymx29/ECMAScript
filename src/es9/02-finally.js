const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('hey!!');
        }else{
            reject('Upsss!');
        }
    }) 
}

anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log('Finnaly'));