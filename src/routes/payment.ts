import express, {Request, Response} from 'express';
const paymentRoutes = express.Router();

paymentRoutes.get('/', (request: Request, response: Response) => {
    response.send('Hello world!');
});

export default paymentRoutes;
