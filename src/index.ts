import express from 'express'
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send({message: 'REST Back-end Challenge 20201209 Running'})
})

app.listen(8080, () => console.log('Server started port: 8080'))