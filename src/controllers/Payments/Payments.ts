import { Request, Response } from 'express';
import { CrudController } from '../CrudController';

export class PaymentController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}
