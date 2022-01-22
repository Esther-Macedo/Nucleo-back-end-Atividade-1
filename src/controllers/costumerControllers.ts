import { Request, Response } from 'express';
import CostumerQueries from '../services/costumerQueries';

class CostumerController {
  public static async addNewUser(req: Request, res: Response) {
    try {
      await new CostumerQueries().createUser(
        req.body.name,
        req.body.username,
        req.body.email,
        req.body.pass,
      );
      res.send('usuario criado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }

  public static async updateUser(req: Request, res:Response) {
    try {
      await new CostumerQueries().updateUser(req.body, parseInt(req.params.id, 10));
      res.send('informações atualizadas').status(200);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }

  public static async deleteUser(req: Request, res:Response) {
    try {
      await new CostumerQueries().delelteUser(parseInt(req.params.id, 10));
      res.send('Usuario deletado').status(200);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }
}

export default CostumerController;