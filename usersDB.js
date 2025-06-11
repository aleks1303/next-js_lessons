const sql = require('better-sqlite3');
const db = sql('users.db')


db.prepare(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    username TEXT
)
`).run();


const dbUsers = []


async function initData () {
    const stmt = db.prepare(`
    INSERT INTO users
    VALUES (null,
            @name,
            @username
           )
    `)

    for (const item of dbUsers) {
        stmt.run(item)
    }
}
initData()