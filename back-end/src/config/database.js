module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'ctbfincar',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
}