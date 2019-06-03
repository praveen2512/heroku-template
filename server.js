const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');


//initialize express
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI_V1;

//connect to mongodb
mongoose
    .connect(db)
    .then(() => console.log("mongo db connected"))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/api/customers', (req,res) => {
    const customers = [
        {id: 1, firstName: 'Praveen', lastName: 'Kumar' },
        {id: 2, firstName: 'Adheep', lastName: 'Mohammed'},
        {id: 3, firstName: 'Nageshwaran', lastName: '' }
    ];

    res.json(customers);
}); 

//serve static assets if in Production

/* if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} */
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listening to port ${port}`));
