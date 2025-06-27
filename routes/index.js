//main router
const express = require('express')
const { getHomePage } = require('../pages/_index/controller');
const { getExamplePage } = require('../pages/_example/controller');
const { getExampleClusteringPage } = require('../pages/_example-clustering/controller');
const { getMapTile } = require('../services/get-map-tile')
const router = express.Router()

router.get('/health', (req, res) => {
    res.status(200).send('OK')
})

router.get('/', getHomePage)
router.get('/api/map-tile/:z/:x/:y', getMapTile);

router.get('/example', getExamplePage)

router.get('/example-clustering', getExampleClusteringPage)

router.get('/project-outline',  (req, res) => {
    res.send('Outline prototype goes here')
})

router.get('/all-projects',  (req, res) => {
    res.send('All projects prototype goes here')
})

module.exports = router