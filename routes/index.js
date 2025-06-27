//main router
const express = require('express')
const { getHomePage } = require('../pages/_index/controller');
const { getExamplePage } = require('../pages/_example/controller');
const { getMapTile } = require('../services/get-map-tile')
const {getAllProjectsPage} = require("../pages/all-projects/controller");
const router = express.Router()

router.get('/health', (req, res) => {
    res.status(200).send('OK')
})

router.get('/', getHomePage)
router.get('/api/map-tile/:z/:x/:y', getMapTile);

router.get('/example', getExamplePage)

router.get('/project-outline',  (req, res) => {
    res.send('Outline prototype goes here')
})

router.get('/all-projects',  getAllProjectsPage)

module.exports = router