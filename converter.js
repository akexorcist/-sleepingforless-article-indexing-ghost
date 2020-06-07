exports.convert = (posts, labels, excludedTitles = []) => {
    let html = labels.map(label => {
        let filteredPosts = posts
            .filter(post => !excludedTitles.includes(post.title))
            .filter(post => post.tags != undefined && post.tags.find(tag => tag.name == label) != undefined)
            .sort(publishedDateSort)
        return toHtml(label, filteredPosts)
    })
    .reduce((acc, value) => acc + value, '')
    return html
}

const toHtml = (title, posts) => {
    let html = ''
    html += '## ' + title + '\n\r'
    html += posts.reduce(reduceToHtml, '')
    html += '\n\r'
    return html
}

const reduceToHtml = (acc, post) => {
    return acc + '* [' + post.title + '](' + post.url + ')\n\r'
}

const publishedDateSort = (a, b) => {
    if (a.published_at > b.published_at) {
        return -1
    } else if (a.published_at < b.published_at) {
        return 1
    } else {
        return 0
    }
}