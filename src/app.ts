import dotenv from "dotenv";
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import db from './models';
dotenv.config();
import bodyParser from 'body-parser';
import router from './routes/payment';

const app = express();
const corsOptions = {
    origin: process.env.CORS_OPTION
};

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // better-security
app.use(cors(corsOptions)) // CORS issue
db.sync()
    .then(() => console.log("connected to db"))
    .catch(() => {
        throw "error";
    });

app.use('/api/v1/payments', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
