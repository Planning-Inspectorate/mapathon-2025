const { osMaps } = require('../config');

const getMapAccessToken = async () => {
    try {
        const authString = Buffer.from(osMaps.OS_MAPS_API_KEY + ':' + osMaps.OS_MAPS_API_SECRET).toString(
            'base64'
        );

        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');

        const authResponse = await fetch('https://api.os.uk/oauth2/token/v1', {
            method: 'POST',
            body: params,
            headers: {
                Authorization: 'Basic ' + authString
            }
        });

        const { access_token: mapAccessToken } = await authResponse.json();

        if (!mapAccessToken) throw new Error('Something went wrong while fetching the map access token ¯\\_(ツ)_/¯');

        return mapAccessToken;
    } catch (error) {
        console.error(error);
    }
};

module.exports = { getMapAccessToken };