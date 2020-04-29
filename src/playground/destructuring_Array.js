//
//   Array destructuring
//

const adress = [
    '1299 S Juniper Street', 'Plovdiv', 'Sofia', 'Zip Code'
];

//We use square brackets in destructuring arrays
const [street,city,state,zip, degrees = 23] = adress
//If we want to skip an item we leave a blank space and a comma 

console.log(`You are in ${city} ${state} and it is ${degrees} degrees now.`);


// ===========Challenge==========
//1. Create a new array with coffee type and it's prices for a small, medium and big coffee.
const item =['Coffee (hot)' , '$2.00', '$2.50' , '$2.75'];

//2. Create the variables with wanted names and set default values
const [coffee = "Coffee", small = "3.00", medium = "3.50", big = "4.00"] = item;

//3. Print out the output using the new variable names created
console.log(`A small ${coffee} costs ${small}`);
console.log(`A medium ${coffee} costs ${medium}`);
console.log(`A big ${coffee} costs ${big}`);
