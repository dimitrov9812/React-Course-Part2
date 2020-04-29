const person = {
    name : "Alex",
    age: 21,
    location: {
        city: 'Plovdiv',
        temp: 10
    }
}

//Example for destrucuring
//We can use default values
const { name:firstName = 'Default', age } = person;

/*
const name = person.name;
const age = person.age;
*/

console.log(`${firstName} is ${age}`);

//we can rename the variables
const { temp: temperature, city} = person.location;

if(temperature && city){
    console.log(`It's ${temperature} in ${city}`);
}
/*
if(person.location.city && person.location.temp){
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}
*/