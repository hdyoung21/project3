const { User } = require('../models');

const userData = [
    {
        name: 'Jung',
        email: 'jung@gtboot.com',
        password: 'Root1234',
        id: 1,
    },
    {
        name: 'Diego',
        email: 'diego@nosleep.com',
        password: 'Noelle=PuttPartyQueen',
        id: 2,
    },
    {
        name: 'Eric',
        email: 'eric@flyington.com',
        password: 'iCheatInPuttParty',
        id: 3,
    },
    {
        name: 'Jason',
        email: 'jason@traitor.com',
        password: 'project2Group',
        id: 4,
    },
    {
        name: 'Wendy',
        email: 'wendy@programmer.com',
        password: 'BestProgrammer',
        id: 5,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;