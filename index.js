const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
const port = 3000

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mySchool';

app.get('/', async (req, res) => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('student');
    const studentsData = await collection.find().toArray();
    console.log(studentsData)

    res.sendFile('RaisaAminkathat')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
