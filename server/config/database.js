module.exports = {
    HOST: "rds-ratioc-postgres.cuajl0xrbwoa.us-east-1.rds.amazonaws.com",
    USER: "ratioc",
    PASSWORD: "Ratioc12",
    DB: "ratioc",
    dialect: "postgres",
    port: 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };