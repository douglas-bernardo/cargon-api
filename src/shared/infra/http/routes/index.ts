import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

/**
 * API Routes
 */
routes.use('/users', usersRouter);

export default routes;
