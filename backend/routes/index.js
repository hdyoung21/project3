import express from 'express';
import projectRoutes from './projects.js';
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import { checkAuth } from '../utils/chechAuth.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/projects', checkAuth, projectRoutes);
router.use('/users', checkAuth, usersRoutes);

export default router;