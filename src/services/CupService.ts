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
}

export default CupService;
