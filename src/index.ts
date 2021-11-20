import mongoose from 'mongoose'
import express from 'express'


const app = express();
app.use(express.json())

const urlMongo = 'mongodb://user:pass@localhost:27017/pharma'
mongoose.connect(urlMongo)



app.listen(8080, () => console.log('Server started port: 8080'))