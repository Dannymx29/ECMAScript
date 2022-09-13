function new_user(name, age, country){
    var name = name || 'oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}
new_user();
new_user('David', 15, 'CO');


function new_user2(name = 'oscar', age = 25, country = 'CL'){
    console.log(name, age, country);
}
new_user2();
new_user2('pedro', 42, 'PE');