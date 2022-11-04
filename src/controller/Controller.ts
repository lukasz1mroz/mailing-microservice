import { Request, Response } from 'express';
import { testService } from '../service/mailService';

export const testRoute = async (req: Request, res: Response): Promise<any> => {
  const wordsResponse = await testService();

  return res.header('Access-Control-Allow-Origin', '*').status(wordsResponse.status).json(wordsResponse.body);
};
