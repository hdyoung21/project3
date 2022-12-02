import express from 'express';
import { createProject, deleteAllProjects, getAllProjects, getCurrentUserProjects, updateProject } from '../controllers/project.js';

const router = express.Router();

router.get('/hello', (req, res) => {
    res.json('hello world');
});

router.get('/all', getAllProjects);
router.post('/', createProject);
router.put('/:projectId', updateProject);
router.get('/myProjects', getCurrentUserProjects);
router.delete('/deleteAll', deleteAllProjects);
router.delete('/:projectId', deleteProject);

export default router;