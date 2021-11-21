import mongoose from 'mongoose';
import express from 'express';
import userController from './controllers/userController';
import cron from 'node-cron';
import {getUsersFromRadomUser} from './services/conJobUser';
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './documentation';
require('dotenv').config();


const app = express();
app.use(express.json());

const db_acess = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  db: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST
}

const urlMongo = `mongodb://${db_acess.user}:${db_acess.pass}@${db_acess.host}:${db_acess.port}/${db_acess.db}`;
mongoose.connect(urlMongo);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.get('/', (req, res) => {
  res.status(200).send({ message: 'REST Back-end Challenge 20201209 Running' });
})
app.put('/users/:userId', userController.updateUser);
app.post('/user', userController.newUser);
app.get('/users/:userId', userController.getUser);
app.get('/users', userController.getAllUsers);
app.delete('/users/:userId', userController.deleteUser);

cron.schedule(process.env.CRON, async () => {
  await getUsersFromRadomUser();
});

app.listen(8080, () => console.log('Server started port: 8080'));