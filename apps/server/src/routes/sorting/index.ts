import express, { Router } from 'express';
import sortingController from '../../controllers/sorting';

const router: Router = express.Router();

router.post('/', sortingController.sort);

export default router;
