const  { getMapAccessToken } = require('../../services/get-map-token')

const getExampleClusteringPage = async (req, res) => {
    try {
        const mapAccessToken = await getMapAccessToken();
        res.render('_example-clustering/view.njk', {
            title: 'Example Clustering',
            pageTitle: 'Example of a basic clustering implementation',
            mapAccessToken
        });
    } catch (error) {
        console.error('Error rendering page:', error);
        res.status(500)
    }
}

module.exports = { getExampleClusteringPage }