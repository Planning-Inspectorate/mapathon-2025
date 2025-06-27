const getProjectOutlinePage = async (req, res) => {
    try {
        res.render('_index/view.njk', {
            pageTitle: 'Project outline map',
        });
    } catch (error) {
        console.error('Error rendering page:', error);
        res.status(500)
    }
}

module.exports = { getProjectOutlinePage }