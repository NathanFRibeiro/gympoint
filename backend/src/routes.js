import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import EnrollmentController from './app/controllers/EnrollmentController';
import CheckinController from './app/controllers/CheckinController';

import auth from './app/middleware/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(auth);

/**
 * Users
 */
routes.post('/users', UserController.store);
routes.put('/user', UserController.update);

/**
 * Students
 */
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

/**
 * Plans
 */
routes.post('/plans', PlanController.store);
routes.get('/plans', PlanController.index);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

/**
 * Enrollment
 */
routes.post('/enrollment', EnrollmentController.store);
routes.get('/enrollment', EnrollmentController.index);
routes.put('/enrollment/:id', EnrollmentController.update);
routes.delete('/enrollment/:id', EnrollmentController.delete);

/**
 * Checkins
 */
routes.post('/students/:studentId/checkins', CheckinController.store);
routes.get('/students/:studentId/checkins', CheckinController.index);

export default routes;
