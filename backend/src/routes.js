import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import auth from './app/middleware/auth';

const routes = new Router();

routes.post('/api/users', UserController.store);
routes.post('/api/sessions', SessionController.store);

routes.use(auth);

routes.put('/api/user', UserController.update);

export default routes;
