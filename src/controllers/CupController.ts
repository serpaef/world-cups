import { Request, Response } from 'express';
import CupService from '../services/CupService';

class CupController {
  constructor(private cupService = new CupService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const cups = await this.cupService.getAll();
      return res.status(200).json(cups);
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  };

  public getByYear = async (req: Request, res: Response): Promise<Response> => {
    const { year } = req.params;
    try {
      const cup = await this.cupService.getByYear(Number(year));
      if (cup) {
        return res.status(200).json(cup);
      } else {
        return res.status(404).json({ message: 'not found' });
      }
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  };
}

export default CupController;
