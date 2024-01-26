require('dotenv').config()
const express = require('express')
const connectDB = require('./server/db/connect')
const authRouter = require('./server/routes/authRoutes')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/v1/vtc', authRouter)

const port = process.env.PORT || 3000;
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
