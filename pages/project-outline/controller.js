const getHomePage = async (req, res) => {
    try {
        res.render('_index/view.njk', {
            title: 'Mapathon 2025',
            pageTitle: 'Mapathon 2025',
        });
    } catch (error) {
        console.error('Error rendering page:', error);
        res.status(500)
    }
}

module.exports = { getHomePage }