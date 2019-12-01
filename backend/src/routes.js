import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import EnrollmentController from './app/controllers/EnrollmentController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';

import auth from './app/middleware/auth';

const routes = new Router();

/**
 * Sessions
 */
routes.post('/sessions', SessionController.store);

/**
 * Student
 */
routes.get('/students/:id', StudentController.index);

/**
 * Checkins
 */
routes.post('/students/:studentId/checkins', CheckinController.store);
routes.get('/students/:studentId/checkins', CheckinController.index);

/**
 * Help Orders
 */
routes.post('/students/:studentId/help-orders', HelpOrderController.store);
routes.get('/students/:studentId/help-orders', HelpOrderController.index);

/**
 * Authentication Middleware
 */
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
 * Enrollments
 */
routes.post('/enrollment', EnrollmentController.store);
routes.get('/enrollment', EnrollmentController.index);
routes.get('/enrollment/:id', EnrollmentController.index);
routes.put('/enrollment/:id', EnrollmentController.update);
routes.delete('/enrollment/:id', EnrollmentController.delete);

/**
 * Help Orders
 */
routes.get('/help-orders/', HelpOrderController.index);
routes.put('/help-orders/:orderId', HelpOrderController.update);

export default routes;
