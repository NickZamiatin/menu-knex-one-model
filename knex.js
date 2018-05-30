module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DB_URL || 'postgress://localhost:5432/menu_db'
    },
    production: {
        client: 'pg',
        connection: process.env.DB_URL
    }

}

// export const development = {
//     client: 'pg',
//     connection: process.env.DB_URL || 'postgress://localhost:5432/menu_db'
// };
// export const production = {
//     client: 'pg',
//     connection: process.env.DB_URL
// };