const exp = {}
const pg = require('pg')

exp.query = (query, value, database) => {
    return new Promise((resolve, reject) => {
        const pool = new pg.Pool({
            user: process.env.DATABASE_USERNAME,
            host: process.env.DATABASE_HOST,
            database: database,
            password: process.env.DATABASE_PASSWORD,
            port: process.env.DATABASE_PORT
        })

        return new Promise((resolve, reject) => {
            pool.query(query, value, (err, result) => {
                pool.end()
                if (err) {
                    return reject(err)
                } else {
                    return resolve(result)
                }
            })
        })
    })
}

module.exports = exp