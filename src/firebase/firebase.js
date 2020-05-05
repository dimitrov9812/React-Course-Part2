import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:   process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(config);

  
  // Creating database variable
  const database = firebase.database();

export { firebase, database as default }



//     database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses  = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                  ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });
//      // Log when removing a child
   
//      database.ref('expenses')
//      .on('child_removed', (snapshot) => {
//          console.log(snapshot.key,snapshot.val());
//      });


//      // log when changing a child
//      database.ref('expenses')
//      .on('child_changed', (snapshot) => {
//          console.log(snapshot.key,snapshot.val());
//      });

//      // log when adding a child
//      database.ref('expenses')
//      .on('child_added', (snapshot) => {
//          console.log(snapshot.key,snapshot.val());
//      });


//     // database.ref('expenses').push({
//     //     description: 'New Expense',
//     //     notes: 'TESTING ON METHOD', 
//     //     amount: '88888888888888',
//     //     createdAt: '12:30'
//     // });
// //   database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses);
// //   })
// //   .catch((e) => {
// //       console.log('reading db error: ' + e);
// //   })


// //===============Challenge==============
// // 1. Setup 'expenses' with threee items ( desctription , notes, amount , createdAt)

// // database.ref('expenses').push({
// //     description: 'First Expense',
// //     notes: '-------', 
// //     amount: '4500',
// //     createdAt: '12:30'
// // });

// //   database.ref('notes/-M6Kkvlcu7vDZ9osRwMD').update({
// //         body: 'buy food'
// //   });
// //   database.ref('notes').push({
// //       title: 'Alexanedrs note',
// //       body: 'Be possitive'
// //   })
// //   const firebaseNotes = {
// //     notes:{
// //         asdaegbvdfa:{
// //             title: 'first note',
// //             body: 'this is my note'
// //         },
// //         scbdgww2r424:{
// //             title: 'Second note',
// //             body: 'this is my second note'
// //         }
// //     }
// //   }; 

// //   database.ref('notes').set(notes);

// //   const notes = [
// //       {
// //           id: '12',
// //           title: 'first note',
// //           body: 'this is my note'
// //       },
// //       {
// //         id: '43234432sae',
// //         title: 'Second note',
// //         body: 'this is my second note'
// //       }
// //   ];



// //   // If we do not pass anything on the 'ref' we will write to the root of the db
// //   database.ref().set({
// //       name: 'Alex',
// //       age: 22,
// //       isGraduated: false,
// //       location: {
// //           city: 'Plovdiv',
// //           country: 'Bulgaria'
// //       }
// //   }).then(() => {
// //       console.log("Data is saved");
// //   }).catch((e) => {
// //     console.log('This failed',e);
// //   })

// //   // database.ref().set('This is my data');

// //   // acces the age and change it
// //     database.ref('age').set(27);

// //   // accesing the location - city 
// //     database.ref('location/city').set('Madan');

// // //=============Challenge==============
// // // 1. Create attributes key wich has:
// // // 1.1. Height
// // // 1.2. Weight

// //     database.ref('attributes').set({
// //         height: 1.54,
// //         weigth: 180
// //     }).then(() => {
// //         console.log("Second call completed")
// //     }).catch((e) =>{
// //         console.log("Error:" + e);
// //     })



// // database.ref('isGraduated')
// // .remove()
// // .then(() =>{
// //     console.log('Is Graduated is removed from the Database')
// // })
// // .catch((e) =>{
// //     console.log('isGraduated error' + e);
// // });


// // database.ref('age')
// // .remove()
// // .then(() =>{
// //     console.log('Age is removed from the Database')
// // }).catch((e) =>{
// //     console.log('Age error' + e);
// // });;

// // // update is like set but it is used if we want to update multiple rows
// // // we could also add something that wasnt in the database
// // database.ref().update({
// //     name: 'Alexander Dimitrov',
// //     age: '99',
// //     // create new value
// //     job: 'Software Developer',
// //     // delete a value 
// //     age: null
// // });

// // database.ref('location').update({
// //     city: 'Plovdiv'
// // })

// // Second way of removing
// // Pass null in the set function
// // database.ref('isGraduated').set(null);

// // ====================================
// // ====================================
// // Fetching data from database

// // database.ref('location')
// // .once('value')
// // .then((snapshot) => {
// //     // we use snapshot to extract the data
// //     // val returns the data we requested
// //     const val = snapshot.val();
// //     console.log(val);
// // })
// // .catch((e) =>{
// //     console.log('error fetching data' + e);
// // })
// // ;

// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // })

// // database.ref('location/city').set('Madan')