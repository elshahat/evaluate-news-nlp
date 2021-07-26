const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

dotenv.config();

// Constants
const app = express();
const port = process.env.PORT || 8081;
const API_KEY = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

// Adding middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

// Testing some server data
console.log(__dirname);
console.log(`Your API key is ${process.env.API_KEY}`);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

app.get('/test', (req, res) => {
    res.send(mockAPIResponse)
});

app.post('/api', async (req, res) => {
    const requestURL = `${baseURL}?key=${API_KEY}&lang=auto&url=${req.body.url}`;
    console.log(req.body);
    console.log(requestURL);
    const response = await fetch(requestURL);

    try {
        const responseData = await response.json();
        res.send(responseData);
    } catch (error) {
        console.log("Error:", error);
    }
});
