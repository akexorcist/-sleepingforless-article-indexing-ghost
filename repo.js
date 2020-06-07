const { getBlogInfo, getPosts } = require('./api')
require('dotenv').config()

exports.getPosts = async() => {
    let posts = []
    let page = 1
    let total = null
    do {
        let { newPosts, nextPage, totalPages } = await getPostSet(page)
        posts = posts.concat(newPosts)
        page = nextPage
        total = totalPages
        let progress = (posts.length * 100 / total)
        updateProgress('[' + progress.toFixed(0) + '%] Collected ' + posts.length + ' of ' + total + ' posts')
    }
    while (page);
    return posts
}

const getPostSet = async(page) => {
    let response = await getPosts(page)
    return {
        newPosts: response,
        nextPage: response.meta.pagination.next, 
        totalPages: response.meta.pagination.total
    }
}

const updateProgress = (message) => {
    // console.log(message)
}