import express, { Router } from 'express';
import sortingRoutes from './sorting';

const router: Router = express.Router();

router.use('/sorting', sortingRoutes);

export default router;
