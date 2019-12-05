try {
    let secret = require('./secret.js')
    url = secret.dburl
} catch (error) {
    url = 'mongodb://localhost:27017/yourDbName'
}
exports.url = url