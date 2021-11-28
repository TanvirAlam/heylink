import { Request, Response } from 'express';

export abstract class CrudController {
    public abstract create(req: Request, res: Response): void;
}
