const  { getMapAccessToken } = require('../../services/get-map-token')

const getAllProjectsPage = async (req, res) => {
    try {
        const mapAccessToken = await getMapAccessToken();
        res.render('all-projects/view.njk', {
            title: 'All projects',
            pageTitle: 'Example of an all projects map implementation',
            mapAccessToken
        });
    } catch (error) {
        console.error('Error rendering page:', error);
        res.status(500)
    }
}

module.exports = { getAllProjectsPage }