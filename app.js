require('dotenv').config()
const express = require('express')
const app = express();
const connectDB = require('./server/db/connect')


const port = process.env.PORT;
const url = process.env.MONGO_URI;

const start = async () => {
    try {
        await connectDB(url)
        app.listen(port, ()=> {
                console.log(`Server is quitely listening on port ${port}...`);
        })

    } catch (error) {
        console.log(`Server could not start nor listen ${error}`);
    }
}

start()
