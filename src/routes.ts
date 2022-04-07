import { Router } from 'express';
import CupController from './controllers/CupController';

const cupController = new CupController();
const routes = Router();

routes.get('/worldcups', cupController.getAll);

export default routes;
