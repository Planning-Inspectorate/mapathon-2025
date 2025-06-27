const  { getMapAccessToken } = require('../../services/get-map-token')

const getExamplePage = async (req, res) => {
    try {
        const mapAccessToken = await getMapAccessToken();
        res.render('_example/view.njk', {
            title: 'Example',
            pageTitle: 'Example of a basic map implementation',
            mapAccessToken
        });
    } catch (error) {
        console.error('Error rendering page:', error);
        res.status(500)
    }
}

module.exports = { getExamplePage }