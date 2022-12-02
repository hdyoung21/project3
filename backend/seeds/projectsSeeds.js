const { Project } = require('../models');

const projectData = [
    {
        title: 'Employee Tracker',
        status: 'In-Progress',
        company: 'GT BOOTCAMP',
        codingLanguage: 'JavaScript',
        projectDescription: "A program that will accept employee's data in the terminal and then formulate an HTML page to display it.",
        user: 1, 
        id: 1,
    },
    {
        title: 'JATE',
        status: 'Finished',
        company: 'Georgia Tech',
        codingLanguage: 'C++',
        projectDescription: 'Just Another Text Editor',
        user: 1, 
        id: 2,
    },
    {
        title: 'RPG The Game',
        status: 'Finished',
        company: 'The Bear',
        codingLanguage: 'CSS',
        projectDescription: 'One of the best games you will ever play',
        user: 2, 
        id: 3,
    },
    {
        title: 'Fly Guys',
        status: 'To-Do',
        company: 'Photography Inc.',
        codingLanguage: 'Java',
        projectDescription: 'Website to share aerial photography',
        user: 3, 
        id: 4,
    },
    {
        title: 'Empire Cheesecake',
        status: 'In-Progress',
        company: 'Ex-Project Members',
        codingLanguage: 'HTML',
        projectDescription: "A Cheesecake Knockoff that isn't even that good",
        user: 4, 
        id: 5,
    },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;