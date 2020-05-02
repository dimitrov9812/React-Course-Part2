import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCk0qctTdGf1g5RTRewHOKcnNG-SwY1AZI",
    authDomain: "budgetapp-71e0f.firebaseapp.com",
    databaseURL: "https://budgetapp-71e0f.firebaseio.com",
    projectId: "budgetapp-71e0f",
    storageBucket: "budgetapp-71e0f.appspot.com",
    messagingSenderId: "457646726929",
    appId: "1:457646726929:web:d1e4e426bc3c058044f6b0",
    measurementId: "G-1HD0R4BCHZ"
};
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();
  
  // Creating database variable
  const database = firebase.database();

  // If we do not pass anything on the 'ref' we will write to the root of the db
  database.ref().set({
      name: 'Alex',
      age: 22,
      isGraduated: false,
      location: {
          city: 'Plovdiv',
          country: 'Bulgaria'
      }
  });

  // database.ref().set('This is my data');

  // acces the age and change it
    database.ref('age').set(27);

  // accesing the location - city 
    database.ref('location/city').set('Madan');

//=============Challenge==============
// 1. Create attributes key wich has:
// 1.1. Height
// 1.2. Weight

    database.ref('attributes').set({
        height: 1.54,
        weigth: 180
    })