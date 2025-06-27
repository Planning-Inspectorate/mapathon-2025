module.exports = {
    app:{
        port: process.env.PORT || 8080,
    },
    nunjucks:{
    autoescape: true,
        noCache: true,
        watch: true
    },
    osMaps: {
        OS_MAPS_API_KEY: process.env.OS_API_KEY,
        OS_MAPS_API_SECRET: process.env.OS_API_SECRET
    }
}