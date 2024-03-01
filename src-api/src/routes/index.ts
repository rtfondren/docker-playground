import express, { Request, Response } from "express";

export const indexRoute = express.Router();

/* GET home page. */
indexRoute.get('/', function(req: Request, res: Response) {
  res.send('express + TS server');
});

