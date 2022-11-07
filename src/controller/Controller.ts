import { Request, Response } from 'express';
import { sendEmail, getFilteredEmails } from '../service/mailService';
import { MailDetails } from '../types/mailDetails';

export const sendEmailRoute = async (req: Request, res: Response): Promise<any> => {
  const mailDetails: MailDetails = req.body;
  const response = await sendEmail(mailDetails);

  return res.header('Access-Control-Allow-Origin', '*').status(response.code).json(response.data);
};

export const scheduleEmailRoute = async (req: Request, res: Response): Promise<any> => {};

export const getFilteredEmailsRoute = async (req: Request, res: Response): Promise<any> => {
  const { senderEmail } = req.query;

  const response = await getFilteredEmails(senderEmail as string);

  return res.header('Access-Control-Allow-Origin', '*').status(response.code).json(response.data);
};
