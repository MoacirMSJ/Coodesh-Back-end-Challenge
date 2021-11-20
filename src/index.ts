import mongoose from 'mongoose'
import express from 'express'
import userController from './controllers/userController'
import cron from 'node-cron'
import {getUsersFromRadomUser} from './services/conJobUser'

const app = express();
app.use(express.json())

const urlMongo = 'mongodb://user:pass@localhost:27017/pharma'
mongoose.connect(urlMongo)

app.get('/', (req, res) => {
  res.send({message: 'REST Back-end Challenge 20201209 Running'})
})

app.put('/users/:userId', userController.updateUser)
app.post('/user', userController.newUser)
app.get('/users/:userId', userController.getUser)
app.get('/users', userController.getAllUsers)
app.delete('/users/:userId', userController.deleteUser)

cron.schedule('* * * * *', async () => {
  
  await getUsersFromRadomUser();
});


app.listen(8080, () => console.log('Server started port: 8080'))