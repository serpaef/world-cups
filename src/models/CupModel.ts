import { model as createModel } from 'mongoose';
import { CupSchema, ICup } from '../schemas/CupSchema';

class CupModel {
  constructor(private cupModel = createModel<ICup>('tournaments', CupSchema)) {}

  public async getAll(): Promise<ICup[]> {
    const cups = await this.cupModel.find();
    return cups;
  }

  public async getByYear(year: number): Promise<ICup | null> {
    const cup = await this.cupModel.findOne({year});
    return cup;
  }
}

export default CupModel;
