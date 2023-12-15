const db = require('../models/index.cjs')

const users = db.users

const getUser = (req , res) => {
res.send('user aquery will go here ')
}

module.exports = {getUser}