import mongoose from 'mongoose'
import express from 'express'
import userController from './controllers/userController'

const app = express();
app.use(express.json())

const urlMongo = 'mongodb://user:pass@localhost:27017/pharma'
mongoose.connect(urlMongo)

app.get('/', (req, res) => {
  res.send({message: 'REST Back-end Challenge 20201209 Running'})
})

app.post('/user', userController.newUser)

app.listen(8080, () => console.log('Server started port: 8080'))