//main router
const express = require('express')
const { getHomePage } = require('../pages/_index/controller');
const { getExamplePage } = require('../pages/_example/controller');
const { getMapTile } = require('../services/get-map-tile')
const { getProjectOutlinePage } = require('../pages/project-outline/controller');

const router = express.Router()

router.get('/health', (req, res) => {
    res.status(200).send('OK')
})

router.get('/', getHomePage)
router.get('/api/map-tile/:z/:x/:y', getMapTile);

router.get('/example', getExamplePage);

router.get('/project-outline',  getProjectOutlinePage);

router.get('/all-projects',  (req, res) => {
    res.send('All projects prototype goes here')
})

module.exports = router