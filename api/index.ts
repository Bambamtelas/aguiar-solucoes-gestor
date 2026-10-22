import { apiApp } from '../src/serverApp.js';
import type { Request, Response } from 'express';

export const config = {
  maxDuration: 60,
};

export default function handler(req: Request, res: Response) {
  return apiApp(req, res);
}

