require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');



app.use(express.json())

app.use(cors());

connectDB();

app.get('/test', (req, res) => {
    res.send('Server Ok')
})

app.get('/', (req, res) => {
    res.send('Resume Analyzer Backend is running')
})
app.listen(port, () => {
    console.log(`listening on port ${port}, http://localhost:${port} `);    
})