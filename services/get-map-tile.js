const { getMapAccessToken } = require('./get-map-token');

//Work in progress, this is to proxy tile requests via the app server as a workaround
// as by default, leaflet.js/OSmaps require API key in the url, which does not seem secure.
// And leaflet.js itself has no support for passing extra headers where we could add our authorisation header.
const getMapTile = async (req, res) => {
    try {
        const { z, x, y } = req.params;
        const mapAccessToken = await getMapAccessToken();

        const response = await fetch(
            `https://api.os.uk/maps/raster/v1/zxy/Light_3857/${z}/${x}/${y}.png`,
            {
                headers: {
                    'Authorization': `Bearer ${mapAccessToken}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch map tile: ${response.statusText}`);
        }

        const buffer = await response.arrayBuffer();

        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': buffer.byteLength
        });

        res.end(Buffer.from(buffer));
    } catch (error) {
        console.error('Error fetching map tile:', error);
        res.status(500).send('Error fetching map tile');
    }
};

module.exports = { getMapTile };
