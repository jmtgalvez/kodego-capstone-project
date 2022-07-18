const db = require('../database/index');
const bcrypt = require('bcrypt');
// const jwt = require('./jwt');

exports.checkUserExists = email => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users WHERE email = ? OR username = ?`;

        const values = [email, email];

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/checkUser DB Error: ${err.message}`);
                return reject(500);
            }
            if (!(rows.length > 0))
                return reject(404);

            return resolve();
        });
    });
}

exports.checkUserAvailable = email => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users WHERE email = ? OR username = ?`;

        const values = [email, email];

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/checkUser DB Error: ${err.message}`);
                return reject(500);
            }
            if (!(rows.length > 0))
                return resolve();

            return reject(409);
        });
    });
}

exports.login = credentials => {
    return new Promise(async(resolve, reject) => {
        const sql = `SELECT * FROM users WHERE email = ? OR username = ?`;

        const values = [credentials.email, credentials.email];

        db.query(sql, values, async(err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/login DB Error: ${err.message}`);
                return reject(500);
            }
            if (rows && await bcrypt.compare(credentials.password, rows[0].password)) {

                const { user_id, email, username, first_name, last_name } = rows[0];

                const user = {
                    user_id,
                    email,
                    username,
                    first_name,
                    last_name,
                }

                // const access_token = jwt.generateAccessToken({ user_id });
                // return resolve({ access_token, user });
                return resolve(user);

            } else {
                return reject(401);
            }
        });
    });
}

exports.addUser = user => {
    return new Promise(async(resolve, reject) => {

        const hashPwd = await bcrypt.hash(user.password, 8);

        let username = user.username ? user.username : user.first_name + "." + user.last_name;
        username = username.toLowerCase();

        const sql = `INSERT INTO users
      ( first_name, last_name, email, username, password )
      VALUES
      ( ?, ?, ?, ?, ?)`;

        const values = [
            user.first_name,
            user.last_name,
            user.email,
            username,
            hashPwd,
        ];

        db.query(sql, values, (err, rows) => {
            if (err) {
                console.log(`/routes/auth/controller/register DB Error: ${err.message}`);
                return reject(500);
            }
            return resolve(rows.insertId);
        });
    });
}