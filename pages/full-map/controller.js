const projects = require('../../services/projects');

// pages/full-map/controller.js
module.exports = (req, res) => {
    res.render('full-map/view.njk', {
        title: 'All Projects Map',
        pageTitle: 'All Projects on Map',
        mapAccessToken: process.env.MAP_ACCESS_TOKEN,
        projects
    });
};