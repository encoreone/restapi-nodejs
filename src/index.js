import express from 'express';

const PORT = 5000;
const app = express();

app.use(express.json())
app.get('/', (req, res) => {
    req.query
    res.status(200).json('Сервер работает!!!')
})

app.listen(PORT, () => console.log(`Сервер стартовал на ${PORT} порту`))