const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NOME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORTA
})

module.exports = { pool };

// .env
// DB_USER=postgres
// DB_HOST=localhost
// DB_DATABASE=postgres
// DB_PASSWORD=Porto321@
// DB_PORTA=5432
// PORTA=3000
// No senac a senha é DB_PASSWORD=bemVindo!