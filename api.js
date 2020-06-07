const fetch = require('node-fetch')
const GhostContentAPI = require('@tryghost/content-api');
require('dotenv').config()

exports.getPosts = (page) => {
    const api = new GhostContentAPI({
        url: process.env.URL,
        key: process.env.API_KEY,
        version: "v3"
    })

    return api.posts.browse({
        limit: 50, 
        page: page,
        include: 'tags'
    })
}