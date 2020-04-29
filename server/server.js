/*
We will use Express to create the webserver with node
we will learn how to create express app wich will get our public folder
and put it on the server
*/
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..' ,'/public');
// get the port data from heroku if possible or return 3000 to run on local machine
const port = process.env.PORT || 3000;

// we now have to tell it where our files live
// and which port it should listen to

app.use(express.static(publicPath));

// now we have to start the server

app.get('*',(req,res) =>{
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port ,() => {
    console.log("Server is up");
})
