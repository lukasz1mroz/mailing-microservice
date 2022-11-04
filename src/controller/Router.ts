import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { testRoute } from './Controller';
import logMiddleware from '../middleware/LogMiddleware';

const router = Router();

router.get('/testRoute', logMiddleware, asyncHandler(testRoute));

export default router;
