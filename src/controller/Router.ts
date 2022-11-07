import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { sendEmailRoute, scheduleEmailRoute, getFilteredEmailsRoute } from './controller';
import logMiddleware from '../middleware/logMiddleware';

const router = Router();

router.post('/sendEmail', logMiddleware, asyncHandler(sendEmailRoute));
router.post('/scheduleEmail', logMiddleware, asyncHandler(scheduleEmailRoute));
router.get('/getFilteredEmails', logMiddleware, asyncHandler(getFilteredEmailsRoute));

export default router;
