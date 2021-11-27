import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import db from './models';

const app = express();
const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // better-security
app.use(cors(corsOptions)) // CORS issue
db.sync()
    .then(() => console.log("connected to db"))
    .catch(() => {
        throw "error";
    });

// set port, listen for requests
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
