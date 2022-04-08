import CupModel from '../models/CupModel';
import { ICup } from '../schemas/CupSchema';

class CupService {
  constructor(private cupModel = new CupModel()) {}

  public async getAll(): Promise<ICup[]> {
    const cups = await this.cupModel.getAll();
    return cups;
  }

  public async getByYear(year:number): Promise<ICup | null> {
    const cup = await this.cupModel.getByYear(year);
    return cup;
  }

  public async create(cup:ICup): Promise<ICup> {
    const newCup = await this.cupModel.create(cup);
    return newCup;
  }
}

export default CupService;
