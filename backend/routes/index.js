import express from 'express';
import projectRoutes from './projects.js';

const router = express.Router();

router.use('/projects', projectRoutes);

export default router;