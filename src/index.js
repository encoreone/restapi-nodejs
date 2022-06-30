import express from 'express';
import mongoose from 'mongoose';
import router from './Route.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = 'mongodb://root:root@localhost:27017/';
const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use(express.static('static'));
app.use('/api', router);

async function startApp() {
    try {
        mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Сервер стартовал на ${PORT} порту`));
    } catch (e) {
        console.log(e);
    }
}

startApp();