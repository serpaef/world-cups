import { Request, Response } from 'express';
import CupService from '../services/CupService';

class CupController {
  constructor(private cupService = new CupService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const cups = await this.cupService.getAll();
      return res.status(200).json(cups);
    } catch({message}) {

      return res.status(500).json({message: message})
    }
  }
}

export default CupController;
