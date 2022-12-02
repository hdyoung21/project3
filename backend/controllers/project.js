import Project from '../models/project.js';
import createError from '../utils/createError.js';

export const createProject = async (req, res, next) => {
    const newProject = new Project({
        title: req.body.title,
        user: req.user.id,
        company: req.body.company,
        codingLanguage: req.body.codingLanguage,
        projectDescription: req.body.projectDescription,
        status: req.body.status,
    });
    try {
        const savedProject = await newProject.save();
        return res.status(200).json(savedProject);
    }
    catch (err) {
        return next(err);
    }
};

export const updateProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.projectId).exec();
        if (!task) return next(createError({ status: 404, message: "Project not found!"}));
        if (task.user.toString() !== req.user.id) 
            return next(createError({ status: 401, message: "Not found"}));
        const updatedProject = await Project.findByIdAndUpdate(req.params.projectId, {
            title: req.body.title,
            completed: req.body.completed,
        }, { new: true });
        return res.status(200).json(updatedProject);
    } catch (err) {
        return next(err);
    }
};

export const getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project.find({});
        return res.status(200).json(projects);
    }
    catch (err) {
        return next(err);
    }
};

export const getCurrentUserProjects = async (req, res, next) => {
    try {
        const tasks = await Project.find({ user: req.user.id });
        return res.status(200).json(tasks);
    } catch (err) {
        return next(err);
    }
};

export const deleteProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.projectId);
        if (project.user === req.user.id) {
            return next(createError({ status:401, message: "Not found"}));
        }
        await Project.findByIdAndDelete(req.params.projectId);
        return res.json('Project deleted.');
    } catch (err) {
        return next(err);
    }
};

export const deleteAllProjects = async (req, res, next) => {
    try {
        await Project.deleteMany({ user: req.user.id });
        return res.json('All projects deleted.');
    }   catch (err) {
        return next(err);
    }
};
