console.log("Challenge");

// ==========Challenge=========
// Use destructuring to print out the Publisher name if a  valid one is provided
// The name of the new variable must be publisherName


const book = {
    title: 'Poor Dad Rich Dad',
    author: '',
    publisher: {
        name: 'Penguin',
        age: 24
    }
}

const { name:publisherName = 'Self-Published', age:publisherAge = 'Not given'} = book.publisher
console.log("Publisher name is: " +publisherName); // Penguin, Default: Self-Published
console.log("His age is:" + publisherAge);
