import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'emails',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Client error', err);
  process.exit(-1);
});

export const getEmailMessages = async () => {
  const queryObj = {
    text: 'SELECT * FROM messages CROSS JOIN receipents CROSS JOIN attachments',
  };

  const data = await pool.query(queryObj);

  return data.rows;
};
