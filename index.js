const { getTotalPostCount, getPosts } = require('./repo')
const { convert } = require('./converter')

const labels = [
    'Android Code',
    'Android Design',
    'Android Dev Tips'
]

const excludedTitles = [
    'สารบัญบทความแอนดรอยด์'
]

const indexing = async() => {
    try {
        let posts = await getPosts(1)
        let html = convert(posts, labels, excludedTitles)
        console.log(html)
    } catch (err) {
        console.log('Something went wrong : ' + err)
    }
}

indexing()