import { NextFunction, Request, Response } from 'express';
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

  public verifyCupData = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void => {
    const {
      year,
      hostCountry,
      champions,
      runnerUp,
      editionGoals,
      editionStrikers,
      bestPlayer,
      bestGoalkeeper,
      bestYoungPlayer,
    } = req.body;

    switch (true) {
      case !year || typeof year !== 'number':
        return res.status(400).json({ message: 'year must be a valid number' });
      case !hostCountry || typeof hostCountry !== 'string':
        return res
          .status(400)
          .json({ message: 'hostCountry must be a valid string' });
      case !champions || typeof champions !== 'string':
        return res
          .status(400)
          .json({ message: 'champions must be a valid string' });
      case !runnerUp || typeof runnerUp !== 'string':
        return res
          .status(400)
          .json({ message: 'runnerUp must be a valid string' });
      case !editionGoals || typeof editionGoals !== 'number':
        return res
          .status(400)
          .json({ message: 'editionGoals must be a valid number' });
      case !editionStrikers || !Array.isArray(editionStrikers):
        return res
          .status(400)
          .json({ message: 'editionStrikers must be a array of strings' });
      case !bestPlayer || typeof bestPlayer !== 'string':
        return res
          .status(400)
          .json({ message: 'bestPlayer must be a valid string' });
      case !bestGoalkeeper || typeof bestGoalkeeper !== 'string':
        return res
          .status(400)
          .json({ message: 'bestGoalkeeper must be a valid string' });
      case !bestYoungPlayer || typeof bestYoungPlayer !== 'string':
        return res
          .status(400)
          .json({ message: 'bestYoungPlayer must be a valid string' });
      default:
        return next();
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const cup = req.body;
    try {
      const newCup = await this.cupService.create(cup);
      return res.status(201).json(newCup);
    } catch ({ message }: unknown) {
      return res.status(500).json({ message });
    }
  };
}

export default CupController;
