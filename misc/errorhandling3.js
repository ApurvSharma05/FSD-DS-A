const Promise = require('promise');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/TestDB';
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB');
        const db = client.db('TestDB');
        return db.collection('TestCollection').findOne({ name: 'John' });
    })
    .then(result => {
        if (!result) {
            throw new Error('Document not found');
        }
        console.log('Document found:', result);
    })
    .catch(err => {
        console.error('Error:', err.message);
    });