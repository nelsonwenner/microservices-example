require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_URI,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: true,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};