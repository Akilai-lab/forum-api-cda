module.exports = (on,config) => {
    on('task', { queryDb: query => { return quertTestDb(query, config) }, })
}