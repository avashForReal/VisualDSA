// src/index.ts
import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import appRoutes from './routes';

/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 3000;

/*
 * Enable cors for incoming requests
 */
app.use(cors());

/* Initialize routes for the root path ("/api") */
app.use('/api', appRoutes);

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.info(`[dsa-visualizer]: Server is running at port: ${port}`);
});
