const getAllProjectsPage = async (req, res) => {
    try {
        res.render('_index/view.njk', {
            pageTitle: 'Interactive map of all projects',
        });
    } catch (error) {
        console.error('Error rendering page:', error);
        res.status(500)
    }
}

module.exports = { getAllProjectsPage }