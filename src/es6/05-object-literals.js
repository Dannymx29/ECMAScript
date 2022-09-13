//enahced object literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country, //sin asignacion
        id: uId //con asignacion
    }
}

console.log(newUser("gamberro", 34, "MX", 1));