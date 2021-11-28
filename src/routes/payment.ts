import express, {Request, Response} from 'express';
const paymentRouter = express.Router({
    strict: true
});
import { paymentController } from '../controllers';

paymentRouter.post('/', (request: Request, response: Response) => {
    paymentController.create(request, response);
});

export default paymentRouter;
