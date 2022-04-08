import { Router } from 'express';
import CupController from './controllers/CupController';

const cupController = new CupController();
const routes = Router();

routes.get('/worldcups', cupController.getAll);
routes.get('/worldcups/:year', cupController.getByYear);
routes.post('/worldcups', cupController.verifyCupData ,cupController.create);

export default routes;
