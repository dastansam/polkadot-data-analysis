const {initDb} = require('./src/db');

async function main() {
    const db = await initDb(
        process.env.DB_URL,
        {      
            logging: false,
            dialect: 'postgres',
        }
    );    
}