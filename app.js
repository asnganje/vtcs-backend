require('dotenv').config()
const express = require('express')
const app = express();

const port = process.env.PORT;

const start = () => {
    try {
        app.listen(port, ()=> {
                console.log(`Server is quitely listening on port ${port}...`);
        })

    } catch (error) {
        console.log(`Server could not start nor listen ${error}`);
    }
}

start()
