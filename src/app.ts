import express, {NextFunction, Request, Response} from 'express';
import helmet from 'helmet';
import cors from 'cors';
const app = express();
const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(express.json());
app.use(helmet()); // better-security
app.use(cors(corsOptions)) // CORS issue

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
