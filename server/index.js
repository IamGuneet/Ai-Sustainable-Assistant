const { log } = require('console')
const { url } = require('inspector')
const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const fs = require('fs')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "eucbpq!uhbp@80874nisd2idhgf"


// middleware for autherization
function autherization(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token,SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ success: false, message: 'Invalid token.' });
    }
}

const userSign = require('./database/newUser')
const eData = require('./database/carbon')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// port
const port = process.env.PORT || 3000

// Routes 

// logging in 

app.post('/login', bodyParser.json(),async (req, res) => {
    const { username, password } = req.body
    let userid
    console.log(username,password);
    try {
        const user = await userSign.findOne({
             Username:username, password:password
             });
             userid = user._id

        if (user) {
          res.status(200).json({ success: true, message: 'Login successful'});
        } else {
          res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
      } catch (error) {
        console.error('Error checking login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
      }


})

app.post('/signUp',async (req, res) => {
        const body = req.body
        console.log(req.body);
    // MonogDb
        let temp = false;
        // new Item document for Db
    
        const newUser =await new userSign({
            Username: body.username,
            email: body.email,
            password: body.password
        })
        temp = true
            newUser.save()
            .then(() => { console.log('saved to db') })
            .catch((e) => { temp = false, console.log(e.message); })
             
            res.status(200).send()
    }
    );

app.post('/CarbonFootprint',async (req,res)=>{
    const body = req.body
    console.log(req.body);

    const Data =await new eData({
        Carbon: body.Carbon,
        Electricity: body.electricity,
        Organic: body.organic,
        Fashion:body.fashion
    })
    temp = true
        Data.save()
        .then(() => { console.log('saved to db')
        res.status(200).send()
     })
        .catch((e) => { temp = false, console.log(e.message); })
         

})

app.get('/logged/history', async (req, res) => {
    try {
        const logs = await eData.find({});
        console.log(logs);
        res.json(logs);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'An error occurred while fetching logs.' });
    }
});

mongoose.connect('mongodb://localhost:27017/haritdepah')
    .then(() => {
        console.log('Db connection established');

        app.listen(port, () => {
            console.log(`running on port ${port}`);
        })
    }).catch((e) => {
        console.log('error in connection:', e);
    })